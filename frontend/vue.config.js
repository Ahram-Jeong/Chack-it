const { defineConfig } = require('@vue/cli-service')
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  // 빌드 결과물 경로 추가
  outputDir: 'dist', // 빌드 시 생성 된 파일들이 저장될 디렉토리
  publicPath: '/', // 배포 될 기본 URL 경로
  assetsDir: 'static', // 빌드 된 static 파일들이 저장 될 하위 디렉토리

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  
  // filemanager-webpack-plugin 설정 추가
  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [
              '../static/**/',
              '../templates/**/',
            ],
          },

          onEnd: {
            copy: [
              { source: 'dist/static', destination: '../static/' },
              { source: 'dist/favicon.ico', destination: '../static/img/' },
              { source: 'dist/index.html', destination: '../templates/' },
            ],
          },
        },
      }),
    ]
  },

})
