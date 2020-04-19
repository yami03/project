
// input 내용 등록
function onAddList() {
  console.log("2222");
  const inputValue = document.querySelector(".opt-input").value;
  
  if (inputValue === '') {
    alert("내용을 입력하세요.");
  } else {
    alert("입력한 내용이 저장 되었습니다.");
    clearInput();
  }
}

// input 내용 삭제
function clearInput() {
  document.querySelector(".opt-input").value = '';
}

// 리스트 항목 삭제
function removeList() {
  const lstChk = document.querySelectorAll("input[type=checkbox]").checked;
    
  const chkbox = document.querySelectorAll("input[type=checkbox]");
  const chk = false;
  for (var i = 0; i < chkbox.length; i++) {
    if (chkbox[i].checked) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  if (!lstChk) {
    console.log("선택된 항목이 없습니다.");
  } else {
    console.log("선택한 항목이 삭제 되었습니다.");
  }
}

// 리스트 항목 완료
function completedList() {
  console.log("선택한 항목이 완료 되었습니다.");
}

// 리스트 항목 진행
function activeList() {
  console.log("선택한 항목이 진행 상태로 전환 되었습니다.");
}