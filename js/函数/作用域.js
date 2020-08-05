function a() {
    function b() {
        let bb = 123;
        aa = 3;
    }
    let aa = 333;
    b();
    console.log(aa);
}
a();
