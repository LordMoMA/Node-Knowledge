function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received!"), 1000);
    });
}

getData().then(data => console.log(data));

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data 2 received!"), 1000);
    });
}

async function printData() {
    const data = await getData2();
    console.log(data);
}

printData();

//////////

function failureCallback(error) {
    console.log(error);
  }

function doSomething() {
    return new Promise((resolve, reject) => {
      // Simulate async operation
      setTimeout(() => resolve('First result'), 1000);
    });
  }
  
  function doSomethingElse(input) {
    return new Promise((resolve, reject) => {
      // Simulate async operation
      setTimeout(() => resolve(input + ' -> Second result'), 1000);
    });
  }
  
  function doThirdThing(input) {
    return new Promise((resolve, reject) => {
      // Simulate async operation
      setTimeout(() => resolve(input + ' -> Final result'), 1000);
    });
  }
  
  doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);



  // better way

  function doSomething2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('First result 2'), 1000);
    });
  }
  
  function doSomethingElse2(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(input + ' -> Second result 2'), 1000);
    });
  }
  
  function doThirdThing2(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(input + ' -> Final result 2'), 1000);
    });
  }
  
  async function doTasks() {
    try {
      const result = await doSomething2();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result 2: ${finalResult}`);
    } catch(error) {
      failureCallback(error);
    }
  }
  
  doTasks();