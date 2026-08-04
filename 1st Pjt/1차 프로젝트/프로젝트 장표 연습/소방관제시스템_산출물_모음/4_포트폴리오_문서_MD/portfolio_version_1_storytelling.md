# 🔥 스마트 AI 소방관제 시스템 (Smart Fire Control System)
## 📄 [Version 1: 비즈니스 & 스토리텔링 중심형 (Executive Pitch)] — 30 Slide Master Deck Transcript

> **디자인 스 스킴: Pure White Tone (#FFFFFF), High-Contrast Typography, 16:9 Widescreen**
> **벤치마크 표준: 201번 블로그 포스팅 33장 슬라이드 전 슬라이드 표준 100% 준수**

---

### Slide 1: 표지
#### 스마트 AI 소방관제 시스템 (Smart AI Fire Control System)
AI 비전 탐지 & 실시간 통합 소방관제 모니터링 플랫폼
- 작성: 팀 FireGuard (소방가드) | 작성일: 2026-07-20

---

### Slide 2: 목차 (Table of Contents)
#### 전체 발표 목차 (Section 1 ~ Section 7)
1. 프로젝트 개요 (1.1 ~ 1.7)
2. 프로젝트 수행 절차 및 방법 (2.1 ~ 2.6)
3. 프로젝트 설계 및 구현 (3.1 ~ 3.4)
4. 프로젝트 시연 (4.1 ~ 4.2)
5. 시연 동영상 스토리보드
6. QnA (핵심 이슈 5종)
7. 자체 평가 및 향후 개선 방향 (7.1 ~ 7.2)

---

### Slide 3: 1.1 프로젝트명 & 1.2 팀 소개
#### 1.1 프로젝트명 & 1.2 팀명 및 팀원 R&R 상세
• 프로젝트명: 스마트 AI 소방관제 시스템 (Smart AI Fire Control System)
• 팀명: FireGuard (소방가드)
• 팀원 R&R:
  - 팀장 (PM / Full-Stack): 전역 @app.before_request 보안 훅 및 approved=False 회원 승인 아키텍처 구축
  - AI엔지니어: OpenCV 비동기 스트림, YOLO v8 (best.pt) 화재/연기 감지 추론, 5초 디바운스
  - 백엔드엔지니어: RESTful API 35종 엔드포인트 설계, JSON Data Store CRUD, Discord Webhook
  - UI/UX엔지니어: 화이트 톤 관제 모니터 UI, 7초 긴급 점멸 알림 인터랙션, 이력 페이지네이션

---

### Slide 4: 1.3 아이디어 소개
#### 1.3 아이디어 소개 — 주제 선정 배경 및 기획 의도
• 기존 화재 대응 시스템의 문제점:
  - 사람의 시각적 발견 및 119 신고 접수(평균 5~10분 소요)에 의존하여 3~5분 골든타임 초과
  - 야간/외곽 산림 지역이나 무인 공장/창고는 연기 감지 모니터링 공백 발생
• 기획 의도:
  - ESP32-CAM & 드론 카메라 스트림을 실시간 AI 분석하여 연기(SMOKE)와 화재(FIRE)를 7초 이내 즉시 자동 감지
  - 관제센터 화면 7초 긴급 점멸 알림 + Gmail OTP 본인확인 + Discord Webhook 즉시 알림 송신 파이프라인 정립

---

### Slide 5: 1.4 유사 사이트 분석
#### 1.4 유사 사이트 분석 및 4대 특화 포인트
• 기존 유사 서비스 비교:
  - 기존 CCTV 관제: 수동 모니터링에 100% 의존하여 관제요원 피로 시 모니터링 공백 발생
  - 공간 연기/열 센서: 층고가 높은 공장이나 야외 공간에서는 오작동율이 높고 발생 위치 파악 불가
• 본 시스템의 4대 차별화 특화 포인트:
  1) YOLO best.pt AI 자동 탐지 오버레이 (Conf 0.18 확신도 이상 화재/연기 사각형 및 라벨 시각화)
  2) 5초 스마트 디바운스 최적화 (동일 사건 매 프레임 중복 DB 기록 폭주 차단)
  3) 권한 기반 회원 승인 체계 (approved=False 가입 통제로 관리자가 승인한 관제요원만 접근)
  4) 7초 실시간 다중 알림 파이프라인 (웹 점멸 + Gmail OTP + Discord Webhook)

---

### Slide 6: 1.5 프로젝트 내용 & 컨셉
#### 1.5 프로젝트 구현 내용 및 컨셉
• 핵심 컨셉: 'Don't Wait, Detect Early!' (기다리지 말고 즉시 감지하라)
• 5대 주요 구현 기능:
  - 1) 2채널 ESP32-CAM & 웹캠 MJPEG 비동기 영상 수집
  - 2) YOLO best.pt 기반 화재/연기 AI 객체 실시간 연산
  - 3) 7초 긴급 알림 팝업 및 관제화면 점멸 사이렌 효과
  - 4) 대전 동구, 중구, 서구, 유성구, 대덕구 구역별/유형별 이력 조회
  - 5) 회원 승인/거절/삭제 및 Pinned 상단 고정 공지사항 작성

---

### Slide 7: 1.6 개발환경 등
#### 1.6 개발환경 등 (사용 툴 및 개발 환경)
• 개발 환경 명세표:
  - OS: Windows 10/11 64-bit
  - Language: Python 3.10.11
  - Web Framework: Flask 3.0.2 (Jinja2, REST API, Blueprints)
  - Vision AI: OpenCV (cv2) 4.9.0, Ultralytics YOLO v8 (best.pt), PyTorch
  - Front-End: HTML5, Vanilla CSS3 (Pure White Tone), JS (Fetch/AJAX)
  - Data Store: JSON File Store (members.json, fire_logs.json, notices.json)
  - External: Gmail SMTP (465 SSL Port), Discord Webhook API

---

### Slide 8: 1.7 활용방안 및 기대효과
#### 1.7 활용방안 및 기대 효과 (비즈니스 실무 활용성)
• 실무 비즈니스 활용방안:
  - 지자체 스마트 소방 관제 센터 및 산림청 산불 감시 모니터링 시스템
  - 대형 제조 공장, 화학물질 저장소, 물류창고 화재 예방 시스템
  - 무인 점포 및 야간 운영 시설의 24시간 무인 소방 모니터링
• 프로젝트 기대 효과:
  - 화재 초기 감지율 40% 이상 향상 및 초기 3분 골든타임 사수
  - 관제 요원의 수동 모니터링 피로도 경감 및 관제 인건비 대폭 절감

---

### Slide 9: 2.1 개발 일정 (WBS)
#### 2.1 개발 일정표 (WBS) [Excel: 개발일정_WBS.xlsx 연동]
• Phase 1~5 100% 달성 일정표:
  - WBS-1.1 ~ 1.3: 기획 및 요구사항 분석 (2026.07.01 ~ 07.04)
  - WBS-2.1 ~ 2.3: Flask Blueprint & JSON DB 설계 (2026.07.04 ~ 07.07)
  - WBS-3.1 ~ 3.4: OpenCV, YOLO v8 AI 비전 & Auth/Dashboard 개발 (2026.07.08 ~ 07.16)
  - WBS-4.1 ~ 4.2: Admin 관리자 승인 & Discord Webhook 연동 (2026.07.16 ~ 07.18)
  - WBS-5.1: 통합 테스트 및 산출물(PPTX/XLSX) 완성 (2026.07.18 ~ 07.20)

---

### Slide 10: 2.2 요구사항 명세서
#### 2.2 요구사항 명세서 (Requirements Specification) [Excel 연동]
• REQ-FR-01 ~ REQ-FR-12 & REQ-NFR-01 ~ 02:
  - REQ-FR-01: 실시간 AI 화재/연기 탐지 (YOLO best.pt, Conf>=0.18)
  - REQ-FR-03: NO SIGNAL 대체 화면 (640x360 검은 배경 오버레이)
  - REQ-FR-04: 로그 중복 차단 디바운스 (5초 이내 재감지 억제)
  - REQ-FR-06: 회원 승인 체계 (approved=False 초기 가입 통제)
  - REQ-FR-09: 7초 긴급 경보 알림 (GET /dashboard/api/latest_alert 1~3s 폴링)
  - REQ-NFR-01: MJPEG quality 80% 압축 및 time.sleep(0.05) 제어
  - REQ-NFR-02: threading.Lock() 분리 적용으로 Race Condition 차단

---

### Slide 11: 2.3 기능 명세서
#### 2.3 기능 명세서 (Functional Specification) [Excel 연동]
• FN-01 ~ FN-18 모듈별 기능 입출력 명세:
  - FN-01 (app.py): 전역 인증 보호 훅 (request.path 세션/승인 검증)
  - FN-06 (auth): Gmail OTP 6자리 난수 메일 발송 (3분 유효세션)
  - FN-09 (dashboard): AI MJPEG multipart/x-mixed-replace 스트림 전송
  - FN-12 (dashboard): 긴급 알림 팝업 API (1~3초 AJAX 폴링)
  - FN-13 (dashboard): Discord 알림 전송 (Webhook POST 전송)
  - FN-15 (admin): 회원 승인/거절/삭제 처리 (members.json 저장)

---

### Slide 12: 2.4 유스케이스 다이어그램
#### 2.4 유스케이스 다이어그램 (Use Case Diagram)
• 사용자 유형별 유스케이스:
  - [비회원]: 회원가입 신청 $ightarrow$ Gmail OTP 인증 $ightarrow$ 승인 대기 안내 확인
  - [승인 관제요원]: 로그인 $ightarrow$ 실시간 관제 스트림 모니터링 $ightarrow$ 7초 경보 점멸 수신 $ightarrow$ 이력 조회 및 Discord 전송
  - [관리자 (Admin)]: 구역별 회원 승인/거절/삭제 $ightarrow$ Pinned 상단고정 공지 작성

---

### Slide 13: 2.5 와이어프레임
#### 2.5 와이어프레임 (UI Layout Mockup)
• Pure White Tone UI 레이아웃 스키마:
  - Header: 로고 | 사용자명 | 승인뱃지 | 로그아웃
  - Navigation: [홈] | [관제모니터] | [감지이력] | [공지사항] | [관리자]
  - Dashboard: 좌측 2채널 비디오 그리드 + 우측 최근 10건 감지 카드 + 7초 긴급 점멸 알림 레이어

---

### Slide 14: 2.6 화면별 기능 — 메인 홈 & Auth
#### 2.6 화면별 기능 설명 — 메인 홈 (`index.html`) & Auth
• 메인 홈 (`index.html`): 전체/화재/연기 감지 수치 통계 뱃지 + 최신 공지 3건 카드 + 미승인 Modal 팝업
• 로그인 & OTP 가입 (`signin.html`, `signup.html`): mId 중복검사 AJAX + Gmail SMTP 6자리 OTP 발송 (3분 세션)

---

### Slide 15: 2.6 화면별 기능 — 관제 & 이력
#### 2.6 화면별 기능 설명 — 관제 모니터 & 감지 이력
• 관제 모니터링 (`monitor.html`): `/dashboard/video_feed/1`, `2` 2채널 MJPEG AI 스트림 + 7초 긴급 알림 Polling 점멸 경보
• 감지 이력 조회 (`history.html`): 대전 동구/중구/서구 구역 필터 + 화재/연기 유형 필터 + 페이지네이션 + Discord 버튼

---

### Slide 16: 2.6 화면별 기능 — 관리자 페이지
#### 2.6 화면별 기능 설명 — 관리자 승인 및 공지 관리
• 관리자 회원 통제 (`management.html`, `members.html`): 구역별 회원 분류 + 승인 대기/완료 원클릭 승인(approve)/거절
• 공지사항 관리 (`write.html`): Pinned 체크박스 상단 고정 공지 작성 및 정렬

---

### Slide 17: 3.1 서비스 구성도
#### 3.1 서비스 구성도 (5-Layer Architecture) [PPTX 연동]
• [PPTX 연동 파일]: 서비스_구성도.pptx
• Presentation Layer (Jinja2, CSS3 Pure White, AJAX)
• Application Layer (Flask 3.0.2, Blueprints)
• AI Engine Layer (OpenCV, YOLO v8 best.pt, 5s Debounce)
• Persistence Layer (members.json, fire_logs.json, notices.json)
• External Layer (Gmail SMTP 465, Discord Webhook API)

---

### Slide 18: 3.2 데이터 수집 및 활용 절차
#### 3.2 데이터 수집 및 활용 절차 (4-Step Pipeline) [PPTX 연동]
• [PPTX 연동 파일]: 데이터_수집_및_활용_절차.pptx
• Step 1: ESP32-CAM & 웹캠 영상 비동기 수집
• Step 2: YOLO v8 (best.pt, Conf>=0.18) 화재/연기 Bounding Box 렌더링
• Step 3: 동일 카메라 5초 이내 중복 로그 억제 및 fire_logs.json 저장
• Step 4: 7초 AJAX 긴급 폴링 점멸 경보 및 Discord Webhook POST 전송

---

### Slide 19: 3.3 API 명세서
#### 3.3 API 명세서 (RESTful 35개 엔드포인트) [Excel 연동]
• [Excel 연동 파일]: API_명세서.xlsx (전체 35개 API 엔드포인트)
• GET / : 메인 홈페이지 (통계 & 공지)
• POST /member/signin : 로그인 처리
• POST /member/signup : 회원가입 신청
• POST /member/send_verification : Gmail OTP 메일 발송
• GET /dashboard/video_feed/<num> : AI MJPEG 스트림
• GET /dashboard/api/logs : 감지 이력 API
• GET /dashboard/api/latest_alert : 7초 긴급 알림 폴링 API
• GET /admin/approve/<id> : 가입 회원 승인 처리

---

### Slide 20: 3.4 주요 함수 — app.py 보안 훅
#### 3.4 주요 함수 — app.py 전역 인증 보안 훅 분석 [PPTX]
• check_auth() 전역 보안 훅 (app.py):
```python
@app.before_request
def check_auth():
    path = request.path
    if path == '/' or any(path.startswith(p) for p in PUBLIC_PREFIXES):
        return None
    member_id = session.get('signinedMemberId')
    if path.startswith('/dashboard/'):
        if not member_id or not load_members().get(member_id, {}).get('approved', False):
            return redirect('/?pending=1')
    return None
```

---

### Slide 21: 3.4 주요 함수 — camera_manager.py AI 디바운스
#### 3.4 주요 함수 — ai/camera_manager.py AI 디바운스 [PPTX]
• get_frame(cam_num) AI 비전 추론 함수:
```python
def get_frame(cam_num):
    with lock:
        frame = latest_frames.get(cam_num)
    results = model(frame, conf=0.18)
    now = time.time()
    if detected and (now - last_alert_time[cam_num] > 5.0):
        save_fire_log(cam_num, label)
        last_alert_time[cam_num] = now
    return cv2.imencode('.jpg', frame, [IMWRITE_JPEG_QUALITY, 80])[1].tobytes()
```

---

### Slide 22: 3.4 주요 함수 — Auth & Dashboard
#### 3.4 주요 함수 — Blueprints (Auth, Dashboard, Admin) [PPTX]
• Auth BP: send_verification() (smtplib.SMTP_SSL 465 OTP 발송)
• Dashboard BP: generate_frames() (MJPEG multipart yield), api_latest_alert() (7초 폴링), api_send_discord() (Discord Webhook)
• Admin BP: approve() (members.json approved: True 변경), write_notice() (Pinned 상단고정 공지)

---

### Slide 23: 4. 프로젝트 시연 — 유저 모드 (1~8번)
#### 4. 프로젝트 시연 — 유저 모드 화면 (1~8번 항목)
• 1번: 메인 접속 화면 $ightarrow$ 2번: 미승인 회원 대기 팝업 $ightarrow$ 3번: 로그인 화면 $ightarrow$ 4번: 회원가입 폼 작성 $ightarrow$ 5번: Gmail OTP 6자리 메일 인증 $ightarrow$ 6번: 관제 모니터 진입 $ightarrow$ 7번: ESP32 스트림 수신 $ightarrow$ 8번: NO SIGNAL 대체화면 렌더링

---

### Slide 24: 4. 프로젝트 시연 — 유저 모드 (9~17번)
#### 4. 프로젝트 시연 — 유저 모드 화면 (9~17번 항목)
• 9번: AI 화재 감지 Red 박스 $ightarrow$ 10번: 연기 감지 Cyan 박스 $ightarrow$ 11번: 5초 디바운스 디버그 로그 $ightarrow$ 12번: 7초 긴급 점멸 경보 팝업 $ightarrow$ 13번: 이력 페이지 (대전 동구 필터) $ightarrow$ 14번: 화재/연기 버튼 필터 $ightarrow$ 15번: 페이지네이션 $ightarrow$ 16번: Discord 버튼 클릭 $ightarrow$ 17번: Discord 메시지 수신

---

### Slide 25: 4. 프로젝트 시연 — 관리자 모드 (18~25번)
#### 4. 프로젝트 시연 — 관리자 모드 화면 (18~25번 항목)
• 18번: 관리자 대시보드 진입 $ightarrow$ 19번: 대전 구역별 회원 목록 분류 $ightarrow$ 20번: 승인 대기 회원 목록 $ightarrow$ 21번: 회원 세부 정보 팝업 $ightarrow$ 22번: 원클릭 '승인(Approve)' $ightarrow$ 23번: 승인 완료 목록으로 이동 $ightarrow$ 24번: '거절/삭제(Reject)' 클릭 $ightarrow$ 25번: 삭제 처리 완료

---

### Slide 26: 4. 프로젝트 시연 — 관리자 모드 (26~33번)
#### 4. 프로젝트 시연 — 관리자 모드 화면 (26~33번 항목)
• 26번: 공지사항 작성 폼 $ightarrow$ 27번: Pinned 상단고정 체크 $ightarrow$ 28번: notices.json 저장 $ightarrow$ 29번: 목록 최상단 정렬 $ightarrow$ 30번: 메인 홈 카드 연동 $ightarrow$ 31번: 공지 상세 모달 $ightarrow$ 32번: 일반 회원 관제 모니터 정상 접속 $ightarrow$ 33번: 관리자 로그아웃 및 세션 파기

---

### Slide 27: 5. 시연 동영상 스토리보드
#### 5. 시연 동영상 스토리보드 및 구성 링크
• Part 1 (1분): 회원가입 $ightarrow$ Gmail OTP $ightarrow$ approved=False 대기 $ightarrow$ 관리자 승인 $ightarrow$ 로그인
• Part 2 (1.5분): ESP32-CAM AI 감지 $ightarrow$ YOLO best.pt 0.18 Bounding Box $ightarrow$ 5초 디바운스 DB 저장
• Part 3 (1분): 7초 긴급 알림 붉은 점멸 경보 $ightarrow$ 감지 이력 조회 $ightarrow$ Discord Webhook 관제 수신

---

### Slide 28: 6. QnA (핵심 이슈 5종)
#### 6. 핵심 개발 QnA (이슈 해결 5종)
• Q1. 중복 로그 폭주 해결? $ightarrow$ A1: 5초 스마트 디바운스 적용
• Q2. 카메라 단절 시 깨짐? $ightarrow$ A2: get_no_signal_frame() 대체 화면 생성
• Q3. 미승인 회원 보안 우회? $ightarrow$ A3: @app.before_request 매 요청 승인 상태 검증
• Q4. OpenCV 메모리 누수? $ightarrow$ A4: imencode 80% JPEG 압축 & time.sleep(0.05)
• Q5. 대용량 이력 로딩 지연? $ightarrow$ A5: 파이썬 10건 단위 페이지네이션 슬라이싱

---

### Slide 29: 7.1 자체 평가 — 성과 및 아쉬운 점
#### 7.1 프로젝트 성과 및 아쉬운 점
• 프로젝트 성과: 실시간 AI 감지 - 웹 스트리밍 - 외부 푸시 알림 End-to-End 파이프라인 완수 & Pure White Tone 가독성 극대화
• 개발 아쉬운 점: JSON 파일 DB 스키마 사용으로 인한 대용량 데이터 로딩 한계 및 단일 해상도 테스트

---

### Slide 30: 7.2 개선 계획 및 로드맵
#### 7.2 개선 계획 및 향후 확장 방향 (로드맵)
• 단기 개선 계획: PostgreSQL / PostGIS DB 도입을 통한 공간 좌표 기반 화재 지적도 검색 구현 & SQLAlchemy ORM 전환
• 장기 확장 방향: RTSP 다중 카메라 수집 확장, C++ TensorRT 모델 경량화, 모바일 PWA 앱 푸시 연동

---
