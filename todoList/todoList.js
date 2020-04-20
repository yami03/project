// input 내용 등록
function onAddList() {
  const inputValue = document.querySelector(".opt-input");
  if (inputValue.value === '') {
    alert("내용을 입력하세요.");
  } else {
    alert("입력한 내용이 저장 되었습니다.");
    inputValue.value = '';
  }
}

// 편집
let flag = false;
function editList(e) {
  const ele = document.querySelectorAll("ul li");

  if (!flag) {
    flag = true;
    e.innerText="취소";
    document.querySelectorAll(".edit-group").forEach( e => {
      e.classList.remove("hide");
    });
  } else {
    flag = false;
    e.innerText="편집";
    document.querySelectorAll(".edit-group").forEach( e => {
      e.classList.add("hide");
    });
  }

  ele.forEach( e => {
    const txt = e.children[0];
    const btn = e.children[1];
    console.log(txt, btn)
    if (flag) {
      txt.innerHTML = '<label><input type="checkbox" name="chkList" />' + txt.innerText + "</label>";
      btn.classList.add("hide");
    } else {
      txt.innerHTML = txt.innerText;
      btn.classList.remove("hide");
    }
  });
}

// checkbox Hide
function chkboxHide() {
  const ele = document.querySelectorAll("ul li");
  flag = false;
  document.querySelector(".btn-edit").innerText = "편집";
  document.querySelectorAll(".edit-group").forEach( e => {
    e.classList.add("hide");
  });

  ele.forEach( e => {
    const txt = e.children[0];
    const btn = e.children[1];
    txt.innerHTML = txt.innerText;
    btn.classList.remove("hide");
  });
}

// 리스트 항목 삭제
function removeList(e) {
  const chkboxWrap = document.querySelector("ul");
  const chkbox = document.querySelectorAll("input[type=checkbox]");
  let chk = false;
  
  chkbox.forEach( e => {
    if (e.checked === true) {
      chk = true;
      chkboxWrap.removeChild(e.parentNode.parentNode.parentNode);
    }
  });

  if (!chk) {
    console.log("선택된 항목이 없습니다.");
  } else {
    chkboxHide();
    console.log("선택한 항목이 삭제 되었습니다.");
  }
}

// 리스트 항목 완료
function completedList() {
  const chkbox = document.querySelectorAll("input[type=checkbox]");
  let chk = false;

  chkbox.forEach( e => {
    if (e.checked === true) {
      chk = true;
      e.parentNode.parentNode.parentNode.classList.add("completed");
    }
  });

  if (!chk) {
    console.log("선택된 항목이 없습니다.");
  } else {
    chkboxHide();
    console.log("선택한 항목이 완료 되었습니다.");
  }
  
}

// 리스트 항목 진행
function activeList() {
  const chkbox = document.querySelectorAll("input[type=checkbox]");
  let chk = false;

  chkbox.forEach( e => {
    if (e.checked === true) {
      chk = true;
      e.parentNode.parentNode.parentNode.classList.remove("completed");
    }
  });

  if (!chk) {
    console.log("선택된 항목이 없습니다.");
  } else {
    chkboxHide();
    console.log("선택한 항목이 진행 상태로 전환 되었습니다.");
  }
}

// 리스트 수정
let defaultValue;
function modifyList(e) {
  const modifyTxt = e.parentNode.parentNode.children[0];

  if (!flag) {
    flag = true;
    e.innerText="저장";
    e.parentNode.parentNode.classList.add("modify");
    document.querySelector(".btn-edit").removeAttribute("enabled", "");
    document.querySelector(".btn-edit").setAttribute("disabled", "");
    
    var node = document.createElement("button");
    var nodeTxt = document.createTextNode("취소");
    var btnCancle = e.parentNode.appendChild(node);
    node.appendChild(nodeTxt);

    if (btnCancle.getAttribute('onclick')) { //IE전용 객체 새로생성
      btnCancle.onclick = function(){ cancleBtn(this); }
    } else {//IE 외 브라우저
      btnCancle.setAttribute('onclick','javascript:cancleBtn(this);');
    }
    defaultValue = modifyTxt.innerText;
    modifyTxt.innerHTML = '<input type="text" value="' + modifyTxt.innerText + '" />';
  } else {
    flag = false;
    e.innerText="수정";
    e.nextElementSibling.remove();
    e.parentNode.parentNode.classList.remove("modify");
    document.querySelector(".btn-edit").setAttribute("enabled", "");
    document.querySelector(".btn-edit").removeAttribute("disabled", "");
    
    const modifyInp = e.parentNode.parentNode.querySelector("input").value;
    modifyTxt.innerHTML = modifyInp;
  }
}

function cancleBtn(e) {
  const modifyTxt = e.parentNode.parentNode.children[0];
  flag = false;
  e.previousElementSibling.innerText="수정";
  e.parentNode.parentNode.classList.remove("modify")
  e.remove();
  document.querySelector(".btn-edit").setAttribute("enabled", "");
  document.querySelector(".btn-edit").removeAttribute("disabled", "");
  modifyTxt.innerHTML = defaultValue;
}
