# 2주차 과제

여행 상품 리스트를 보고 장바구니에 저장할 수 있는 사이트 구현

# 🔗 배포 링크

[바로가기](https://pre-onboarding-9th-2-2-sigma.vercel.app/main)

# 🗂️ 프로젝트 구조

```
src
├── App.tsx
├── Router.tsx
├── layout               // 공통 레이아웃 컴포넌트
│   └── Layout.tsx
├── components           // 페이지 구성하는 컴포넌트
│   ├── Header.tsx
│   ├── Modal.tsx
│   ├── Product.tsx
│   ├── Cart.tsx
│   └── filters
│       ├── Filter.tsx
│       ├── Location.tsx
│       └── Price.tsx
├── pages                 // 페이지 컴포넌트
│   ├── EmptyReservation.tsx
│   ├── Main.tsx
│   ├── NotFound.tsx
│   └── Reservation.tsx
├── redux                 // redux-toolkit 상태 관리
│   ├── hook
│   │   └── redux.hook.ts
│   ├── slice
│   │   ├── cartslice.ts
│   │   └── productslice.ts
│   ├── mock_data.json
│   ├── redux.interface.ts

│   └── store.ts
└── utils
    └── formatCurrency.ts
```

## ▪️ commit convention

| Tag Name | Description      |
| -------- | ---------------- |
| feat     | 새로운 기능 추가 |
| design   | UI style 변경    |
| refactor | 코드 리팩토링    |
| fix      | 에러, 버그 수정  |
| docs     | 문서수정         |
| chores   | 기타 수정사항    |

## ▪️ 사용한 라이브러리

- 코어 및 프레임워크: Vite & React, Typescript
- 상태관리: Redux(Redux/toolkit)
- 스타일링: chakra-ui, react-icons, react-toastify
- React-router-dom

## ▪️팀원 구성표

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jiyeon2">
      <img src="https://avatars.githubusercontent.com/u/18395475?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>이지연</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ggsno">
      <img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오강산</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yses9296">
      <img src="https://avatars.githubusercontent.com/u/54027716?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최은서</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/tjswo2292">
      <img src="https://avatars.githubusercontent.com/u/55657931?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최선재</b></sub>
      </a>
    </td>
</tr>
<tr>
    <td align="center">
      <a href="https://github.com/jiwonmik">
      <img src="https://avatars.githubusercontent.com/u/59993029?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김지원</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/onezeun">
      <img src="https://avatars.githubusercontent.com/u/78632052?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>한지은</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/iuesver">
      <img src="https://avatars.githubusercontent.com/u/87600354?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오혁상</b></sub>
      </a>
    </td>
      <td align="center">
      <a href="https://github.com/junseokoh-hub">
      <img src="https://avatars.githubusercontent.com/u/99642719?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오준석</b></sub>
      </a>
    </td>

  </tr>
</table>
