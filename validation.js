function validation() {
    var name = document.getElementById("uname").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var fname = document.getElementById("fname").value;
    var addr = document.getElementById("addr").value;
    var pno = document.getElementById("pno").value;
    var mno = document.getElementById("mno").value;
    var email = document.getElementById("mail").value;
    var cname = document.getElementById("cname").value;
    var mark = document.getElementById("mark").value;
    var frontEnd = document.getElementById("front-end").checked;
    var backEnd = document.getElementById("back-end").checked;
    var database = document.getElementById("database").checked;

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
        display(name, dob, gender.value, fname, addr, pno, mno, email, cname, mark, frontEnd, backEnd, database);
    }
}

function display(name, dob, gender, fname, addr, pno, mno, email, cname, mark, frontEnd, backEnd, database) {
    document.write("<h2>Registration Details:</h2>");
    document.write("<p><strong>Name:</strong> " + name + "</p>");
    document.write("<p><strong>Date of Birth:</strong> " + dob + "</p>");
    document.write("<p><strong>Gender:</strong> " + gender + "</p>");
    document.write("<p><strong>Father's Name:</strong> " + fname + "</p>");
    document.write("<p><strong>Address:</strong> " + addr + "</p>");
    document.write("<p><strong>Phone Number:</strong> " + pno + "</p>");
    document.write("<p><strong>Mobile Number:</strong> " + mno + "</p>");
    document.write("<p><strong>Email:</strong> " + email + "</p>");
    document.write("<p><strong>Course Name:</strong> " + cname + "</p>");
    document.write("<p><strong>Marks:</strong> " + mark + "</p>");
    document.write("<p><strong>Skills:</strong></p>");
    if (frontEnd) {
        document.write("<p>Front-End Development</p>");
    }
    if (backEnd) {
        document.write("<p>Back-End Development</p>");
    }
    if (database) {
        document.write("<p>Database Management</p>");
    }
    document.write("<p><strong>Personal Interest:</strong></p>");
    var interests = document.getElementsByName("interest");
    for (var i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            document.write("<p>" + interests[i].value + "</p>");
        }
    }
    var img = document.createElement("img");
    img.src = "https://www.google.com/imgres?imgurl=http%3A%2F%2F4.bp.blogspot.com%2F-tKHyh7sDP0s%2FT_xj5oV6-tI%2FAAAAAAAACz4%2FYlps7Lrwlik%2Fs1600%2FSachin.jpg&imgrefurl=http%3A%2F%2Fblog.jazzfactory.in%2F2012%2F07%2Fcreate-passport-size-photos-at-home.html&tbnid=nTR5pThdxlEbnM&vet=12ahUKEwjC0937jsT9AhW62XMBHU6xCg4QMygqegUIARC1Ag..i&docid=0GvdCOTxcJeYBM&w=429&h=430&q=passport%20size%20photo&ved=2ahUKEwjC0937jsT9AhW62XMBHU6xCg4QMygqegUIARC1Ag";
    document.body.appendChild(img);
}