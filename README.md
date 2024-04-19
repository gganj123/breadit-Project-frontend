# Breadit 🙂

**빵집 탐방 커뮤니티🍞**

React, TypeScript 와 REST API 를 활용한 빵집 탐방 커뮤니티 프로젝트입니다.

<br/>

## ⚒️ STACKS 
<div> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> 
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> 
<br />
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

<br />

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
 <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>
<br/>
<br/>


## 🧑 팀 구성
| 이름   | 역할          | 이미지 |
| ------ | ------------- | ------ |
| 정영준 | FE 총괄        | 🐸     |
| 김연서 | FE             | 🐯     |
| 한지은 | FE            | 😺     |
| 라수빈 | BE 총괄       | 🐹    |
| 김도현 | BE            | 🐼    |
| 김은지 | BE            | 🐰     |

<br/>

## 🗃 와이어프레임
[FIGMA](https://www.figma.com/file/Mdf4ewn8zhXbhaEbCNZWav/Team_03?type=design&node-id=0-1&mode=design&t=cU5x1zBWzl93Bn6p-0)
<br/>
<br/>
<br/>

## 🍞 프로젝트 소개
![브레딧딧](/uploads/09613b806fdc11e10a998bd3299b92a3/xxx.png)

<h3>사용자 관련 기능</h3>

1. 회원가입
    - 회원가입 폼의 입력 값이 조건에 안 맞을 시 (이메일 형식, 이메일 중복 여부, 이메일 인증번호 일치 여부, 비밀번호와 비밀번호확인의 일치 여부, 닉네임 형식식) 이를 사용자에게 알려준다.
    - 조건에 맞게 입력 후 제출 버튼을 누를 시, 백엔드 서버와 연결되어 회원가입 정보가 db에 저장된다.
    <br/>
2. 로그인 (일반 로그인 / 카카오 로그인)
    - 로그인 폼의 입력 값이 조건에 안 맞을 시 (이메일 형식이 안 맞거나, 비밀번호가 틀리거나 등) 이를 사용자에게 알려준다.
    - 카카오 로그인을 통해 카카오 계정 정보를 입력하면 백엔드 서버에서 바로 회원가입 시켜주어 로그인이 성공되고, JWT 토큰 (access토큰, refresh토큰)이 프론트 단 (localStorage)에 저장되고,
    메인 페이지로 이동한다.
    - 일반 로그인 db에 저장된 정보로 로그인 성공 시, JWT 토큰 (access토큰, refresh토큰)이 프론트 단 (localStorage)에 저장되고,
    메인 페이지로 이동한다.
    <br/>
3. 로그아웃
    - 로그아웃 시, 프론트 단에 저장되어 있던 JWT 토큰이 제거된다.
    <br/>
5. 사용자 정보 조회 (일반 사용자/ 카카오 사용자)
    - 사용자는 마이이 페이지에서 자신의 회원 정보를 조회할 수 있다.
    <br/>

6. 사용자 정보 수정 (일반 사용자/ 카카오 사용자)
    - 일반 사용자는 마이 페이지에서 비밀번호를 db에 저장된 비밀번호가 맞는지 확인 후, 정보 수정(프로필 이미지, 닉네임, 비밀번호)을 할 수 있다.
    - 카카오 사용자는 정보 수정(프로필 이미지, 닉네임)을 할 수 있다.
    <br/>

7. 사용자 정보 삭제 (일반 사용자/ 카카오 사용자)
    - 일반 사용자는 일반 사용자는 마이 페이지에서 비밀번호를 db에 저장된 비밀번호가 맞는지 확인 후, 자신의 회원 정보를 삭제(탈퇴)할 수 있다.
    - 카카오 사용자는 마이 페이지에서 자신의 회원정보를 삭제(탈퇴)할 수 있다.
    <br/>

8. 관리자 기능 
    - 관리자 계정이 존재하며, 사용자 계정과 구분된다.

<h3>지도 관련 기능</h3>
![지도](/uploads/cd01d9771461d6494c262f3629fb5830/지도.JPG)
![지도2](/uploads/417757ebf56c0e95dfeb2ebedc04799a/지도2.JPG)


1. 현재 위치 조회
    - 사용자가 지도 페이지에 접속하면, 브라우저를 통해 현재 위치 권한을 요청한다.
    - 사용자의 동의를 받은 후 현재 위치를 조회하여 지도에 표시한다.
    - 사용자의 현재 위치는 실시간으로 업데이트되지 않으며, 페이지를 새로 고침하거나 재요청을 해야 갱신된다.
    <br/>

2. 근처 빵집 조회
    - 지도 페이지에서 '근처 빵집 찾기' 버튼을 클릭하면, 카카오 지도 API를 사용하여 사용자의 현재 위치 기반으로 주변 빵집을 조회한다.
    - 검색 결과는 지도 상에 마커로 표시되며, 각 마커에는 빵집의 기본 정보가 담긴 툴팁이 연결된다.
    - 마커를 클릭하면 해당 빵집 이름이 모달창으로 나온다.
    <br/>

3. 빵집 상세 정보 조회
    - 사용자가 특정 빵집 마커를 클릭하면, 카카오 지도 API를 통해 해당 빵집의 상세 정보를 요청하고 표시한다.
    - 상세 정보에는 빵집의 이름, 주소, 평점, 사용자 리뷰 등이 포함될 수 있다.
    - 빵집의 사진, 메뉴, 영업 시간 등 추가 정보도 조회할 수 있으며, 이는 API의 반환 정보에 따라 달라질 수 있다.
    <br/>

4. 빵집 검색 기능
    - 지도 페이지에는 검색 바가 있으며, 사용자는 특정 빵집 이름이나 키워드를 입력하여 검색할 수 있다.
    - 검색 결과는 사용자가 입력한 정보와 일치하는 빵집 목록을 보여주며, 해당 결과는 지도 상에 마커로 표시된다.
    - 검색된 마커를 클릭하면 사용자는 해당 빵집에 대한 상세 정보를 조회할 수 있다.
    <br/>

<h3>커뮤니티 관련 기능</h3>
![커뮤니티](/uploads/0191b0ec4f95e0487aefd6268cfc1498/커뮤니티.JPG)

1. 게시글 작성
    - 게시글 작성 기능은 로그인한 유저와 관리자만 이용할 수 있다.
    - 사용자는 게시글 작성 시 제목, 본문 내용, 대표 이미지 설정, 추가 이미지 첨부 등을 할 수 있다.
    - 게시글 작성 시 카테고리를 '베이커리' 또는 '레시피'로 구분하여 선택할 수 있다.
    - 대표 이미지와 추가 이미지는 파일 업로드 방식을 통해 첨부하며, 이미지 파일은 S3에 저장된다.
    - 게시글은 입력된 정보를 바탕으로 데이터베이스에 저장되며, 커뮤니티 메인 페이지나 해당 카테고리 페이지에서 조회할 수 있다.
    <br/>

2. 게시글 상세 페이지
    - 각 게시글 클릭 시 해당 게시글의 상세 페이지로 이동한다.
    - 상세 페이지에는 게시글의 모든 내용과 첨부된 이미지가 표시된다.
    - 사용자는 게시글에 대해 '좋아요', '북마크', 그리고 '링크 공유' 기능을 사용할 수 있다.
        - **좋아요**: 게시글에 좋아요를 표시하며, 좋아요 수는 실시간으로 업데이트된다.
        - **북마크**: 개인 북마크 목록에 게시글을 추가하여 나중에 쉽게 접근할 수 있도록 한다.
        - **링크 공유**: 게시글의 URL을 복사하거나 소셜 미디어 플랫폼으로 공유할 수 있는 링크를 제공한다.
    - 사용자는 게시글에 댓글을 작성할 수 있으며, 댓글은 게시글 아래에 시간 순으로 표시된다.
    - 댓글 기능(수정,삭제)을 통해 사용자 간의 의견 교환이 이루어질 수 있다.
    <br/>

3. 게시글 검색
    - 커뮤니티 메인 페이지에는 검색바가 포함되어 있으며, 사용자 게시글을 검색할 수 있다.
    - 검색 결과는 검색어와 가장 관련성 높은 게시글부터 리스트 형태로 표시된다.
    - 사용자는 검색 결과를 클릭하여 해당 게시글의 상세 페이지로 직접 이동할 수 있다.
    <br/>

4. 관리자 기능
    - 관리자는 모든 게시글을 관리할 권한을 가지며, 게시글을 수정하거나 삭제할 수 있다.
    - 관리자는 사용자의 댓글도 관리할 수 있으며, 부적절한 내용의 댓글을 삭제할 수 있다.
    <br/>

<h3>매거진 관련 기능</h3>
![매거진](/uploads/cc373ed35413c34ba33e22f2e4c2f4d2/매거진.JPG)
![매거진상세](/uploads/f612ed3fcf9b60d8a88ff446d62cdfa4/매거진상세.JPG)

1. 매거진 작성
    - 매거진 작성은 관리자만 가능하다. 일반 유저/비회원은은 매거진을 작성할 수 없으며, 오직 조회만 가능하다.
    - 관리자는 매거진을 작성할 때 제목, 본문 내용, 대표 이미지 설정, 추가 이미지 첨부 등을 할 수 있다.
    - 대표 이미지와 추가 이미지는 파일 업로드 방식을 통해 첨부하며, 이미지 파일은 s3에 저장된다.
    - 매거진은 컨텐츠 관리 시스템을 통해 작성되며, 데이터베이스에 저장된 후 사용자에게 공개된다.
    <br/>

2. 매거진 상세 페이지
    - 사용자는 매거진 목록에서 원하는 항목을 클릭하여 상세 페이지로 이동할 수 있다.
    - 상세 페이지에서는 매거진의 전체 내용과 첨부된 이미지가 표시된다.
    - 사용자는 매거진에 대해 '좋아요', '북마크' 및 '링크 공유' 기능을 사용할 수 있다.
        - **좋아요**: 매거진에 좋아요를 표시하며, 좋아요 수는 실시간으로 업데이트된다.
        - **북마크**: 사용자는 매거진을 개인 북마크 목록에 추가하여 나중에 쉽게 접근할 수 있다.
        - **링크 공유**: 매거진의 URL을 복사하거나 소셜 미디어 플랫폼으로 공유할 수 있는 링크를 제공한다.
    - 사용자는 매거진에 댓글을 달 수 있으며, 댓글은 매거진 아래에 시간 순으로 표시된다.
    <br/>

3. 매거진 관리
    - 관리자는 매거진을 새로 작성, 수정, 삭제할 수 있는 전체적인 관리 권한을 가진다.
    - 매거진 관리 기능을 통해 관리자는 공개 전 내용을 최종 검토하고, 필요한 경우 수정할 수 있다.
    - 관리자는 또한 사용자의 댓글을 관리할 수 있으며, 부적절한 댓글을 삭제할 수 있다.
    <br/>
```
    작업 기간 : 2024.03.23 ~ 2023.04.19
    배포 링크 : [Breadit](https://frontend-nine-tau-41.vercel.app/)
```
```
    관리자 계정: editor@naver.com
    비밀번호: 11111111

    테스트 계정: test@test.com
    비밀번호: 11111111
```
