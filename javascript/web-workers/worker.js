self.onmessage = function (e) {
    console.log("Worker received:", e.data);
    const result = e.data * 2;
    self.postMessage(result);
};

// check browser console! ✅