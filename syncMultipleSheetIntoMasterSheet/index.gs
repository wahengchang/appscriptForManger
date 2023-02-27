
function syncSheetToSheet(masterSheetName, fromSheetNameList = [], fromCol, toCol, config = {}) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const mergeSheet = ss.getSheetByName(masterSheetName);
  const {requireFieldIndex = 1} = config

  const mergedData = []
  for (let i = 0; i < fromSheetNameList.length; i++) {
    const sheetName = fromSheetNameList[i]
    const ns = ss.getSheetByName(sheetName)

    const MRange = ns.getRange(
      2,                    //start from 2rd row of "fromSheetNameList"
      fromCol,
      ns.getLastRow() - 1,  //last row of "fromSheetNameList"
      toCol
    ).getValues()

    for (let j = 0; j < MRange.length; j++) {
      if (requireFieldIndex && !MRange[j][requireFieldIndex]) continue

      mergedData.push([...MRange[j], sheetName])
    }
  }

  mergeSheet.getRange(2, 1, mergedData.length, mergedData[0].length).setValues(mergedData) // Pasting data in Master Sheet  
}


function syncBacklinkResultSheet () {
  return syncSheetToSheet('masterSheet', ['peter','mary','sam'], indexByChar('a'),  29, {requireFieldIndex: 7})
}
