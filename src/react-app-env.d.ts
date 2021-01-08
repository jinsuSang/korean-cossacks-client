/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    readonly REACT_APP_KAKAO_TRANSLATE_URL: string
    readonly REACT_APP_PAPAGO_TRANSLATE_URL: string
    readonly REACT_APP_GOOGLE_TRANSLATE_URL: string
  }
}
