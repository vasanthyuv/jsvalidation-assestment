function validation() {
    var name = document.getElementById("uname").value;
    var dob = document.getElementById("dob").value;
    var gend = document.querySelector('input[name="gender"]:checked').value;
    var fname = document.getElementById("fname").value;
    var add = document.getElementById("addr").value;
    var phone = document.getElementById("pno").value;
    var mobile = document.getElementById("mno").value;
    var email = document.getElementById("mail").value;


    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    } else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    } else if (email == '') {
        alert('Please enter your user email id');
    } else if (!filter.test(email)) {
        alert('Invalid email');
    } else {
        alert('Thank you for registering!');
        display(name, dob, gend, fname, add, phone, mobile, email);
    }
}



function display(name, dob, gend, fname, add, phone, mobile, email) {
    document.write("<h2>Registration Details:</h2>");
    document.write("<p><strong>Name:</strong> " + name + "</p>");
    document.write("<p><strong>Date of Birth:</strong> " + dob + "</p>");
    document.write("<p><strong>Gender:</strong> " + gend + "</p>");
    document.write("<p><strong>Father's Name:</strong> " + fname + "</p>");
    document.write("<p><strong>Address:</strong> " + add + "</p>");
    document.write("<p><strong>Phone Number:</strong> " + phone + "</p>");
    document.write("<p><strong>Mobile Number:</strong> " + mobile + "</p>");
    document.write("<p><strong>Email:</strong> " + email + "</p>");
    document.write("<p><strong>Email:</strong> " + email + "</p>");
    var img = document.createElement("img");
    img.src = "https://www.google.com/imgres?imgurl=http%3A%2F%2F4.bp.blogspot.com%2F-tKHyh7sDP0s%2FT_xj5oV6-tI%2FAAAAAAAACz4%2FYlps7Lrwlik%2Fs1600%2FSachin.jpg&imgrefurl=http%3A%2F%2Fblog.jazzfactory.in%2F2012%2F07%2Fcreate-passport-size-photos-at-home.html&tbnid=nTR5pThdxlEbnM&vet=12ahUKEwjC0937jsT9AhW62XMBHU6xCg4QMygqegUIARC1Ag..i&docid=0GvdCOTxcJeYBM&w=429&h=430&q=passport%20size%20photo&ved=2ahUKEwjC0937jsT9AhW62XMBHU6xCg4QMygqegUIARC1Ag";
    document.body.appendChild(img);

}
