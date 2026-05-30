// 用户信息模板 — 此文件提交到 GitHub
// 使用时复制为 user-info.ts 并填入真实信息

export const userInfo = {
  // 基本信息
  name: '[你的姓名]',
  nameEn: '[Your Name]',
  birthYear: 2000,
  birthMonth: 1,
  gender: '',

  // 联系方式
  email: '[your-email@example.com]',
  phone: '[your-phone]',
  location: '[你的城市]',

  // 教育背景
  education: [
    {
      degree: '硕士',
      school: '[你的硕士学校]',
      schoolEn: '[University Name]',
      period: '[YYYY.MM – YYYY.MM]',
      major: '[专业]',
      direction: '[方向]',
      location: '[地点]',
    },
    {
      degree: '本科',
      school: '[你的本科学校]',
      schoolEn: '[University Name]',
      period: '[YYYY.MM – YYYY.MM]',
      major: '[专业]',
      location: '[地点]',
    },
  ],

  // 研究兴趣
  researchInterests: ['[方向1]', '[方向2]', '[方向3]'],
}

export const placeholders: Record<string, string> = {
  '{{name}}': userInfo.name,
  '{{nameEn}}': userInfo.nameEn,
  '{{email}}': userInfo.email,
  '{{phone}}': userInfo.phone,
  '{{location}}': userInfo.location,
  '{{birth}}': `${userInfo.birthYear}年${userInfo.birthMonth}月`,
  '{{educationSummary}}': `${userInfo.education[0].school} ${userInfo.education[0].major}（${userInfo.education[0].direction}）硕士 | ${userInfo.education[1].school} ${userInfo.education[1].major} 本科`,
}
