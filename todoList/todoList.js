// input 내용 등록
function onAddList() {
  const li = document.createElement("li");
  const txtEl = document.createElement("div");
  const btnEl = document.createElement("div");
  const inputValue = document.querySelector(".opt-input").value;
  const val = document.createTextNode(inputValue);
  
  var btn = document.createElement("button");
  var btnTxt = document.createTextNode("수정");

  txtEl.appendChild(val);
  txtEl.classList.add("txt");
  btn.appendChild(btnTxt);
  btnEl.appendChild(btn);
  btnEl.classList.add("btn");
  
  if (btn.getAttribute('onclick')) { //IE전용 객체 새로생성
    btn.onclick = function(){ modifyList(this); }
  } else {//IE 외 브라우저
    btn.setAttribute('onclick','javascript:modifyList(this);');
  }

  li.appendChild(txtEl);
  li.appendChild(btnEl);

  if (inputValue === '') {
    alert("내용을 입력하세요.");
  } else {
    alert("입력한 내용이 저장 되었습니다.");
    document.querySelector(".opt-input").value = '';
    document.querySelector(".todo-lst").appendChild(li);
  }
}

// 편집
let flag = false;
function editList(e) {
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

  document.querySelectorAll(".todo-lst li").forEach( e => {
    const txt = e.children[0];
    const btn = e.children[1];
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
  flag = false;
  document.querySelector(".btn-edit").innerText = "편집";
  document.querySelectorAll(".edit-group").forEach( e => {
    e.classList.add("hide");
  });

  document.querySelectorAll(".todo-lst li").forEach( e => {
    const txt = e.children[0];
    const btn = e.children[1];
    txt.innerHTML = txt.innerText;
    if (!e.classList.contains("completed")) {
      btn.classList.remove("hide");
    }
  });
}

// 리스트 항목 삭제
function removeList(e) {
  let chk = false;

  document.querySelectorAll("input[type=checkbox]").forEach( e => {
    if (e.checked === true) {
      chk = true;
      document.querySelector(".todo-lst").removeChild(e.parentNode.parentNode.parentNode);
    }
  });

  if (!chk) {
    alert("선택된 항목이 없습니다.");
  } else {
    chkboxHide();
    console.log("선택한 항목이 삭제 되었습니다.");
  }
}

// 리스트 항목 완료
function completedList() {
  let chk = false;

  document.querySelectorAll("input[type=checkbox]").forEach( e => {
    if (e.checked === true) {
      chk = true;
      e.parentNode.parentNode.parentNode.classList.add("completed");
    }
  });

  if (!chk) {
    alert("선택된 항목이 없습니다.");
  } else {
    chkboxHide();
    console.log("선택한 항목이 완료 되었습니다.");
  }
}

// 리스트 항목 진행
function activeList() {
  let chk = false;

  document.querySelectorAll("input[type=checkbox]").forEach( e => {
    if (e.checked === true) {
      chk = true;
      e.parentNode.parentNode.parentNode.classList.remove("completed");
    }
  });

  if (!chk) {
    alert("선택된 항목이 없습니다.");
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
