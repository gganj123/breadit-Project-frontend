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

**사용자 관련 기능** 
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

**지도 관련 기능**

**좋아요/ 북마크 관련 기능**

**커뮤니티/ 매거진  관련 기능**



- 작업 기간 : 2024.03.23 ~ 2023.04.19
- 배포 링크 : [Breadit](https://frontend-nine-tau-41.vercel.app/)

