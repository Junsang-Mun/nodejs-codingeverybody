# Package Manager


- Package: (어떠한 형태든) Software를 부르는 이름 중 하나.
- Package Manager: 패키지의 관리(설치, 업데이트, 삭제 등)를 담당하는 프로그램.
- Process: (실행중인) 프로그램을 부르는 말


# NPM


- nodejs에 번들링된 패키지 매니저이자
- 가장 광범위하게 사용하는 매니저 중 하나


# PM2


- 생코 강의에서는 'PM2' 설치를 예시로 두고 있음.
- Advanced, production **process** manager for Node.js : Process -> Main.js가 되겠죠
- main.js를 실행하다보다보면 의도치 않게 프로세스가 꺼질 수 있는데, 
- PM2는 우리가 만든 프로세스를 감시하고 꺼지면 다시 실행하는 역할도 하고,
- 코드를 수정하면 Node를 재실행해야했지만, PM2의 경우 파일의 수정을 감지하고 자동으로 Node를 재실행하는 등...
- 아주 **기특한** 친구입니다.


# 설치하기


- ```npm install pm2 -g```
- -g: 독립된 소프트웨어이므로 모든 사용자에게 사용 권한을 준다
- 설치 과정에서 permission 관련 에러가 뜬다면 admin 권한을 grant하자(=sudo)


# 실행하기


- ```pm2 start '어쩌고.js'```
- ```pm2 monit``` : 현재 실행중인 프로세스를 확인할 수 있음.
- 프로세스를 강제로 죽이면 바로 살아난다. 우리 프로그램을 좀 더 강인하게 생존할 수 있도록 도와줌.
- ```pm2 start main.js --watch``` : 코드를 모니터링하다가 코드에 변경이 있으면 바로 리로드 시켜준다.
- ```pm2 log``` : 로그를 보고 에러를 파악할 수 있음.