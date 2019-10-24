//i. zerocho Node.js book ch4.3 - restFront.js

function getUser() { // 로딩 시 사용자 가져오는 함수
    var xhr = new XMLHttpRequest();

    //i. .onload는 일종의 이벤트핸들러(콜백). 요청(Request) 이후에, 서버로부터 응답이 올때 작동.
    xhr.onload = function () {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var list = document.getElementById('list');
            list.innerHTML = '';
            Object.keys(users).map(function (key) {
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.textContent = users[key];

                //i. 수정버튼.
                var edit = document.createElement('button');
                edit.textContent = '수정';
                edit.addEventListener('click', function () { // 수정 버튼 클릭
                    var name = prompt('바꿀 이름을 입력하세요');
                    if (!name) {
                        return alert('이름을 반드시 입력하셔야 합니다');
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            getUser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PUT', '/users/' + key);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({ name: name }));
                });

                //i. 삭제버튼.
                var remove = document.createElement('button');
                remove.textContent = '삭제';
                remove.addEventListener('click', function () { // 삭제 버튼 클릭
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            getUser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/users/' + key);
                    xhr.send();
                });

                //i. 위에서 만들어준것들을 드뎌 같다붙이는 작업.
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });
        } else {
            console.error(xhr.responseText);
        }
    };

    //i. 진짜 요청하는 부분! - 위에 .onload함수는 요청하고나서 서버로부터 응답 올때를 위한 이벤트핸들러(콜백)엿고. 
    xhr.open('GET', '/users');//i. 요청 메서드 및 요청 주소 입력.
    xhr.send();//i. 요청 전송!
}
/////i.여기까지 getUser 함수.

window.onload = getUser; // 로딩 시 getUser 호출

// 폼 제출
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = e.target.username.value;
    if (!name) {
        return alert('이름을 입력하세요');
    }
    var xhr = new XMLHttpRequest();

    //i. 마찬가지로 이벤트핸들러.
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getUser();
        } else {
            console.error(xhr.responseText);
        }
    };

    //i. 마찬가지로 여기가 실제 요청보내는 부분. POST메서드이므로 데이터도 보내줌.
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: name })); //i. 요청 전송, 근데 POST니까 데이터 동봉해서 전송.
    e.target.username.value = '';
});