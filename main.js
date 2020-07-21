function createMultiplyTable(start, end) {
  if(isValid(start, end)){
    return PrintMultiplyTable(start, end);
  }
  return null;
}

function isValid(start, end){
  return IsEndBiggerThanStart(start, end) && IsStsrtAndEndInRange(start, end);
}

function IsEndBiggerThanStart(start, end){
  if(start > end) return false;
  return true;
}

function IsStsrtAndEndInRange(start, end){
  if(start >= 1 && start <= 1000 && end >= 1 && end <= 1000) return true;
  return false;
}

function PrintMultiplyTable(start, end){
  var MultiplyTable = '';
  for(var i = start;i <= end;i++){
    for(var j = start; j <= i;j++){
      MultiplyTable += j+'*'+i+'='+i*j+'\t';
    }
    MultiplyTable = MultiplyTable.substring(0,MultiplyTable.length-1);
    if(i<end) MultiplyTable +='\n';
  }
  return MultiplyTable;
}

module.exports = {
  createMultiplyTable,
};
