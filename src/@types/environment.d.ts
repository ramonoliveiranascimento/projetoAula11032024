declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string,
      OPENAI_TOKEN: string
    }
  }
}

export {}