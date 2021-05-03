<p align="middle" >
  <img width="200px;" src="https://raw.githubusercontent.com/woowacourse/javascript-lotto/main/src/images/lotto_ball.png"/>
</p>
<h2 align="middle">Level2 - 행운의 로또</h2>
<p align="middle">React 로또 어플리케이션</p>
</p>

## 🚀 Getting Started

- Boilerplate는 페어와 협의하여 자유롭게 선택합니다.
- CSS는 레벨1에 있는 코드를 직접 찾아서 자유롭게 재활용합니다.
- 불필요한 Third-Party 없이 React에서 제공되는 것만으로 구현합니다.
- 테스트 도구 선정부터 작성까지 일절 관여하지 않습니다. 자유롭게 즐겨보세요
  <br>

### 컴포넌트 구조

- App
  - Main
    - PurchaseForm
    - LottoListSection
      - LottoItem
    - WinningNumberSection
      - WinningNumberForm
  - Modal
    - ResultSection
    - EarningRateSection

### 디렉토리 구조

```markdown
- /src
  |- /components
  | |- /Main
  | | |- index.js
  | | |- PurchaseForm.js
  | | |- LottoListSection.js
  | | |- LottoItem.js
  | | |- WinningNumberSection.js
  | | |- WinningNumberForm.js
  | |- /Modal
  | | |- index.js
  | | |- ResultSection.js
  | | |- EarningRateSection.js
  |- /css
```

## 📝 Requirements

### Step1

- [x] **`Class Component`**를 사용한다.
- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
  - [x] 금액이 입력되지 않은 경우 경고를 표시한다.
  - [x] 금액은 숫자만 입력 가능하다.
  - [x] 금액의 최소 값은 1,000원으로 한다.
- [x] 로또 1장의 가격은 1,000원이다.
  - [x] 1000의 단위만 입력 가능하게 한다.
- [x] 소비자는 **자동 구매**만 할 수 있다.
- [x] 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.
- [x] 당첨번호와 보너스 번호를 입력할 수 있다.
  - [x] 당첨번호는 최소 1, 최대 45으로 한다.
  - [x] 당첨 번호와 보너스 번호는 중복 될 수 없다.
- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
  - [x] 모달 닫기는 esc, dimmed click을 포함한다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 돼서 다시 구매를 시작할 수 있다.

### Step2

- [x] Step1의 `Class Component`를 `Function Component`로 마이그레이션 합니다.

### 공통 심화

- [x] UI를 통해 **실시간으로** 당첨 번호 발표까지 남은 시간을 제공합니다.
  - [x] 당첨 발표일이 되면 다음 발표일로 업데이트된다.
- [ ] 다시 시작하기 버튼을 누르면 당첨 번호 발표 시간도 사라진다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/react-lotto/blob/main/LICENSE) licensed.
