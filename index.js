// Your code here


// MAP
function mapToNegativize(sourceArray){
 let negativeSource = []
  for (let i = 0; i < sourceArray.length; i++){
    negativeSource.push(-sourceArray[i])
  }

  return negativeSource;
};


function mapToNoChange(sourceArray){
  let sameArray = []
  for (let i = 0; i < sourceArray.length; i++){
    sameArray.push(sourceArray[i])
  }

  return sameArray;
};


function mapToDouble(sourceArray){
  let doubledSource = []
  for (let i = 0; i < sourceArray.length; i++){
    doubledSource.push(sourceArray[i] * 2)
  }

  return doubledSource;
};


function mapToSquare(sourceArray){
  let squaredSource = []
  for (let i = 0; i < sourceArray.length; i++){
    squaredSource.push(sourceArray[i] ** 2)
  }

  return squaredSource;
};



// REDUCE
function reduceToTotal(sourceArray, startingPoint){
  let sourceTotal;

  if (startingPoint){
    sourceTotal = startingPoint
  } else {
    sourceTotal = 0
  }

  for (let i = 0; i < sourceArray.length; i++){
    sourceTotal += sourceArray[i]
  }
  return sourceTotal;
};


function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i] === false){
      return false
    }
  }

  return true
};

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i] === true){
      return true
    }
  }

  return false
};