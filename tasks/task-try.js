async function sayHello() {
  try {
    let message = await Promise.resolve("Hello, world!");
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
}

sayHello();

  