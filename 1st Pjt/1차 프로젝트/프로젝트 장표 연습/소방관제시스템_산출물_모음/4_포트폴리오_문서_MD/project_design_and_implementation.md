# 🔥 소방관제시스템 (Fire Control System) - 산출물 안내 문서

---

> [!NOTE]
> 요청하신 **3. 프로젝트 설계 및 구현**에 대한 4개 개별 파일 산출물이 지정하신 포맷과 슬라이드 분량(각 PPTX 당 3슬라이드 이하)에 맞춰 성공적으로 생성되어 프로젝트 워크스페이스에 저장되었습니다.

---

## 📂 생성된 산출물 파일 목록

| 번호 | 항목명 | 파일 포맷 | 슬라이드 분량 | 파일 바로가기 링크 |
|:---:|:---|:---:|:---:|:---|
| **3.1** | **서비스 구성도** | `.pptx` (PowerPoint) | **3 슬라이드** | [서비스_구성도.pptx](file:///c:/kdm/AIoT%205th%20lecture%20Web%20+%20Flask_ex/1st%20Pjt/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9A%A9/1stProject_%ED%95%B4%EC%84%9D/%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B5%AC%EC%84%B1%EB%8F%84.pptx) |
| **3.2** | **데이터 수집 및 활용 절차** | `.pptx` (PowerPoint) | **3 슬라이드** | [데이터_수집_및_활용_절차.pptx](file:///c:/kdm/AIoT%205th%20lecture%20Web%20+%20Flask_ex/1st%20Pjt/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9A%A9/1stProject_%ED%95%B4%EC%84%9D/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%88%98%EC%A7%91_%EB%B0%8F_%ED%99%9C%EC%9A%A9_%EC%A0%88%EC%B0%A8.pptx) |
| **3.3** | **API 명세서** | `.xlsx` (Excel) | **전체 35개 API** | [API_명세서.xlsx](file:///c:/kdm/AIoT%205th%20lecture%20Web%20+%20Flask_ex/1st%20Pjt/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9A%A9/1stProject_%ED%95%B4%EC%84%9D/API_%EB%AA%85%EC%84%B8%EC%84%9C.xlsx) |
| **3.4** | **주요 함수** | `.pptx` (PowerPoint) | **3 슬라이드** | [주요_함수.pptx](file:///c:/kdm/AIoT%205th%20lecture%20Web%20+%20Flask_ex/1st%20Pjt/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9A%A9/1stProject_%ED%95%B4%EC%84%9D/%EC%A3%BC%EC%9A%94_%ED%95%A8%EC%88%98.pptx) |

---

## 🖥️ PPTX 슬라이드 구성 내용 (슬라이드 3장 분량)

### 1. `서비스_구성도.pptx` (총 3 슬라이드)
- **Slide 1**: 시스템 전체 아키텍처 (Presentation, Application, AI Engine, Persistence, External 5개 계층 카드 구성)
- **Slide 2**: 핵심 소프트웨어 모듈 (Auth, Dashboard, Admin, Notice Blueprint 모듈 간 연동 구조)
- **Slide 3**: 하드웨어 및 외부 연동 인터페이스 (ESP32-CAM, OpenCV/YOLO, Gmail SMTP, Discord Webhook)

### 2. `데이터_수집_및_활용_절차.pptx` (총 3 슬라이드)
- **Slide 1**: 실시간 AI 영상 감지 데이터 플로우 (수집 $\rightarrow$ AI 추론 $\rightarrow$ 박스 렌더링 $\rightarrow$ MJPEG 전송 4단계)
- **Slide 2**: 디바운스 매커니즘 & JSON 저장 절차 (5초 디바운스 및 AUTO_INCREMENT ID 기반 `fire_logs.json` 기록)
- **Slide 3**: 관제 대시보드 데이터 활용 & 알림 (7초 긴급 알림 AJAX 폴링, 이력 필터링/페이지네이션, Discord 전송)

### 3. `주요_함수.pptx` (총 3 슬라이드)
- **Slide 1**: 메인 서버 (`app.py`: `check_auth()`, `home()`) & AI 비전 모듈 (`camera_manager.py`: `init_camera()`, `get_frame()`, `camera_worker()` 등)
- **Slide 2**: 인증 모듈 (`auth/routes.py`: `signin()`, `send_verification()`, `verify_otp()`) & 대시보드 모듈 (`dashboard/routes.py`: `generate_frames()`, `api_logs()`, `api_latest_alert()`)
- **Slide 3**: 관리자/공지 모듈 (`admin/routes.py`, `notice/routes.py`) & 데이터 유틸리티 (`json_manager.py`, `fire_Json_manager.py`, `notices_Json_manager.py`)

---
