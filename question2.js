const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let success = { message: 'delayed success!' };
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('error: delayed exception!'));
    }, 500);
  });
};

resolvedPromise()
  .then(success => console.log(success))
  .catch(error => console.error(error));

rejectedPromise()
  .then(success => console.log(success))
  .catch(error => console.error(error.message));
