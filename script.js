updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}

makeBold = () => {
  document.getElementById("text-output").classList.toggle("bold");
}

makeItalic = () => {
  document.getElementById("text-output").classList.toggle("italic");
}

makeUnderline =() => {
  // document.getElementById("text-output").classList.toggle("underline");
  let formatedText = document.getElementById("text-output");
  if (formatedText.classList.contains("underline")){
    formatedText.classList.remove("underline");
  }else{
    formatedText.classList.add("underline");
  }
}

alignText = (alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
}

