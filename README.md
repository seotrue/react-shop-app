# react shop app 
**기존 보일럿 플래이트로 연동**  
서버와 프론트 같이 실행 
> npm run dev

## front  
### 기능 별 페이지
- 업로드 페이지: Drop-Zone을 사용하여 이미지 업로드 및 데이터 전송 [/product/upload]
- 랜딩 페이지:  
   1. DB 내의 모든 상품 정보 리스트 UI 노출
   2. antd 캐루셀 사용으로 상품 이미지 슬라이드  
   3. 더보기[서버처리] =>추후 인피니트 스크롤로 커스텀해보기
   4. 필터링 (라디오버튼 필터링, 체크박스 필터링)
   5. 검색기능
- 상세페이지:

## server
- multer 라이브러리 
- 결과값을 보낼떄는  무조건  res 
- populater('필드') =>ex) 스키마 필드의 모든 정보들을 가져온다 writer 일경의 해당 아이디 해당 이름 등등 모등 정보 가져온다  
  => 프론크 단에서 확인시 response.writer의 안에 해당 정보들이 들어가잇다.
- exec() => 커뤼를 돌린다.(디비를 돌려서 결과값을 찾는다?)

**모델**
- 스키마에 필요한 필드 정의

**라우터**
- 서버의 index.js 내에 모든 데이터를 정의하면 길어진다  
=> 고로 express의 라우터를 이용해 기능별로 작성한다.

**MONGOGDB**
- find({$text:{$search:string}})  
=> 몽고디비에서 제공하는 $text/$search => 검색 기능을 위해서는 모델에두 추가를 해줘야한다.  
=> model > Product.js 에서 검색에 걸릴 필드를 따로 표기   
```
productSchema.index({
    //  자료형이 문자열인(text) title / description 에 검색기능이 걸려라
    title : 'text',
    description:'text'
},{
    weights : {
        title: 5, // title이 description보다 5배 중요
        description:1
    }
})
```

**Schema**
- 스키마는 컴퓨터 프로그래밍에서 데이터 베이스의 조직이나 구조를 의미
- DB 내에 어떤 구조로 데이터에 저장되느가를 나타내는 데이테베이스 구조를 스키마라구 한다.

1. 아래 server.js 코드에서 exerciseRouter 와 userRouter 를 불러와 app.use()를 사용해 경로 지정 후 router 파일을 설정합니다.
2. users.js 코드에서 Router 모듈을 설정하고 user.model.js를 불러옵니다.
3. model에서 Schema는 mongoose 모듈을 불러와 mongoose.Schema 를 인스턴스화 하여 새로운 userSchema의 필드를 설정 해줍니다.
#### stydy 정리
- event.currentTarget.value 와 event.target.value 차이