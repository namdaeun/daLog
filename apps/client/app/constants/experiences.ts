import cemwareImage from '/public/assets/image/img_cemware.png';
import dosoptImage from '/public/assets/image/img_dosopt.png';
import makersImage from '/public/assets/image/img_makers.png';
import nowsoptImage from '/public/assets/image/img_nowsopt.png';

export const EXPERIENCES = [
  {
    id: 1,
    logoUrl: cemwareImage,
    company: 'CEMWARE',
    position: 'Frontend Developer',
    description: ['콘텐츠 팀 소속', '사내 API 기반 디지털 콘텐츠 개발'],
    startDate: '2025.03',
    endDate: '2025.06',
  },
  {
    id: 2,
    logoUrl: nowsoptImage,
    company: 'SOPT 34기',
    position: 'NOW SOPT 34th Web Part',
    description: [
      '34기 APPJAM 우수상 수상',
      '합동세미나 리드 역할을 맡아 컨벤션 준비 및 전반적 개발 과정 총괄',
      'React 스터디장을 맡아 3개월 간 스터디 진행',
      '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
    ],
    startDate: '2024.03',
    endDate: '2024.07',
  },
  {
    id: 3,
    logoUrl: dosoptImage,
    company: 'SOPT 33기',
    position: 'DO SOPT 33rd Web Part',
    description: [
      '34기 APPJAM 우수상 수상',
      '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
    ],
    startDate: '2023.09',
    endDate: '2024.01',
  },
  {
    id: 4,
    logoUrl: makersImage,
    company: 'makers 36기',
    position: 'Admin Team Frontend Developer',
    description: [
      'SOPT의 공홈과, 내부 어드민 시스템, 리크루팅 지원서 유지 및 보수',
      '2주 단위의 애자일 스프린트를 통한 프로젝트 진행',
    ],
    startDate: '2025.03',
    endDate: '2025.06',
  },
];
