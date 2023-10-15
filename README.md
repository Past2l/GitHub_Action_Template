# GitHub Action Template

## 템플릿 설명

```
GitHub Action과 Docker를 사용하여 프로젝트를 배포할 때
이 템플릿을 이용하여 프로그램 배포를 쉽게 할 수 있습니다.
NodeJS 예제코드가 포함되어 있습니다. 
```

## 파일 종류

폴더 위치 : `.github/workflows`<br>
밑에 있는 파일들 중에서 자신이 사용하고 싶은 방식의 파일을 하나 사용하면 됩니다.

- Runner에서 빌드 & Port 사용 - `deploy_with_port_build_runner.yml`
- Runner에서 빌드 & Port 미사용 - `deploy_without_port_build_runner.yml`
- Server에서 빌드 & Port 사용 - `deploy_with_port_build_server.yml`
- Server에서 빌드 & Port 미사용 - `deploy_with_port_build_server.yml`

## Action Secrets

```config
GHCR_TOKEN= # GHCR 토큰
SSH_HOST= # SSH 연결 주소
SSH_PORT= # SSH 연결 포트
SSH_USER= # SSH 유저 이름
SSH_PASSWORD= # SSH 유저 비밀번호, Optional
SSH_KEY= # SSH 접속 비밀키, Optional
```

## 주의 사항
- Host 포트와 Container 포트를 변경할 경우에 `.github/workflows/*.yml` 파일을 직접 수정해야합니다.