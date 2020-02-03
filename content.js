function main() {
  var textTags = document.getElementsByClassName(
    "kix-wordhtmlgenerator-word-node"
  );
  try {
    var code = "";
    for (var i = 0; i < textTags.length; i++) {
      var line = textTags[i].innerText;
      // google docs has fancy quotation marks so we replace those with boring ones
      line = line
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"');
      // getElementsByClassName(...) returns invisible characters for some fucking reason, so we use regex to keep only characters used for coding
      line = line.replace(
        /[^a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ \\\\]+/g,
        ""
      );
      code += line;
    }
    console.log(code);
    alert(eval(code));
  } catch (err) {
    console.error(err);
  }
}

main();
