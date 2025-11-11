/**
 * LUZURIO Design System
 * 高端豪华车租赁网站主题配置
 *
 * 核心理念：现代极简 + 奢华质感 + 速度感
 */

import { createTheme } from '@mui/material/styles'

// ==================== 色彩系统 ====================
const colors = {
  // 主色 - 深色背景
  primary: {
    main: '#000000',        // 纯黑
    dark: '#000000',
    light: '#1A1A1A',       // 深灰
    contrastText: '#FFFFFF',
  },

  // 强调色 - 红色（品牌色）
  secondary: {
    main: '#FF4757',        // 红色 (CTA按钮、Logo、高亮)
    dark: '#E63946',        // 悬停时的深色
    light: '#FF6B7A',       // 浅色变体
    contrastText: '#FFFFFF',
  },

  // 背景色
  background: {
    default: '#000000',     // 页面主背景
    paper: '#1A1A1A',       // 卡片/组件背景
  },

  // 文字色
  text: {
    primary: '#FFFFFF',     // 主标题
    secondary: '#B0B0B0',   // 副标题、描述
    disabled: '#808080',    // 禁用/辅助信息
  },

  // 分割线
  divider: '#333333',

  // 其他色彩
  error: {
    main: '#FF4757',
  },
  warning: {
    main: '#FFA502',
  },
  info: {
    main: '#5352ED',
  },
  success: {
    main: '#2ED573',
  },
}

// ==================== 字体系统 ====================
const typography = {
  fontFamily: [
    '"Inter"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"SF Pro Display"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  // 字号
  h1: {
    fontSize: '4.5rem',       // 72px - Hero主标题
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '3rem',         // 48px - 一级标题
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '2.25rem',      // 36px - 二级标题
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '1.5rem',       // 24px - 三级标题
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',      // 20px - 四级标题
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',         // 16px - 五级标题
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',         // 16px - 正文
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',     // 14px - 小正文
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontSize: '1rem',         // 16px - 按钮
    fontWeight: 600,
    textTransform: 'none' as const, // 不自动大写
    letterSpacing: '0.02em',
  },
  caption: {
    fontSize: '0.75rem',      // 12px - 说明文字
    fontWeight: 400,
    lineHeight: 1.4,
    color: colors.text.disabled,
  },
}

// ==================== 间距系统 ====================
const spacing = (factor: number) => `${8 * factor}px`

// ==================== 断点系统 ====================
const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
}

// ==================== 阴影系统 ====================
const shadows = [
  'none',
  // 1: 微小阴影（卡片默认）
  '0 2px 8px rgba(0, 0, 0, 0.4)',
  // 2: 小阴影（按钮、输入框）
  '0 4px 12px rgba(0, 0, 0, 0.5)',
  // 3: 中阴影（悬停卡片）
  '0 8px 24px rgba(0, 0, 0, 0.6)',
  // 4: 大阴影（弹窗）
  '0 12px 40px rgba(0, 0, 0, 0.7)',
  // 5-24: 其他阴影（扩展）
  ...Array(20).fill('0 0 0 rgba(0, 0, 0, 0)'),
] as const

// ==================== 组件样式覆盖 ====================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: colors.background.default,
        color: colors.text.primary,
        scrollBehavior: 'smooth',

        // 滚动条样式（深色主题）
        '&::-webkit-scrollbar': {
          width: '12px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#0A0A0A',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#333333',
          borderRadius: '6px',
          '&:hover': {
            background: '#555555',
          },
        },
      },

      // 全局选择文本样式
      '::selection': {
        backgroundColor: colors.secondary.main,
        color: colors.primary.main,
      },
    },
  },

  // 按钮组件
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        padding: '14px 40px',
        fontSize: '1rem',
        fontWeight: 600,
        transition: 'all 0.3s ease',

        '&:hover': {
          transform: 'translateY(-2px)',
        },
      },

      // 主按钮（CTA）
      contained: {
        backgroundColor: colors.secondary.main,
        color: colors.secondary.contrastText,
        boxShadow: `0 4px 12px rgba(255, 71, 87, 0.3)`,

        '&:hover': {
          backgroundColor: colors.secondary.dark,
          boxShadow: `0 6px 20px rgba(255, 71, 87, 0.5)`,
        },
      },

      // 次要按钮
      outlined: {
        borderColor: colors.text.primary,
        color: colors.text.primary,
        borderWidth: '2px',

        '&:hover': {
          backgroundColor: colors.text.primary,
          color: colors.primary.main,
          borderWidth: '2px',
        },
      },
    },
  },

  // 卡片组件
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: colors.background.paper,
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',

        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: shadows[3],
        },
      },
    },
  },

  // 输入框组件
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          color: colors.text.primary,

          '& fieldset': {
            borderColor: colors.divider,
          },

          '&:hover fieldset': {
            borderColor: colors.text.secondary,
          },

          '&.Mui-focused fieldset': {
            borderColor: colors.secondary.main,
          },
        },

        '& .MuiInputLabel-root': {
          color: colors.text.secondary,

          '&.Mui-focused': {
            color: colors.secondary.main,
          },
        },
      },
    },
  },

  // 纸张组件（背景）
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: colors.background.paper,
        color: colors.text.primary,
      },
    },
  },

  // 对话框
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.background.paper,
        backgroundImage: 'none',
      },
    },
  },

  // 菜单
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.background.paper,
      },
    },
  },

  // 抽屉
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.primary.main,
      },
    },
  },
}

// ==================== 创建主题 ====================
export const luzurioTheme = createTheme({
  palette: {
    mode: 'dark',
    ...colors,
  },
  typography,
  spacing,
  breakpoints,
  shadows: shadows as any,
  components,

  // 圆角
  shape: {
    borderRadius: 8,
  },

  // 过渡动画
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
})

// ==================== 导出色彩常量（供CSS使用）====================
export const LUZURIO_COLORS = {
  // 背景色
  bgPrimary: '#000000',
  bgSecondary: '#1A1A1A',
  bgTertiary: '#2A2A2A',

  // 强调色
  accentPrimary: '#FF4757',      // 红色
  accentSecondary: '#FFD700',
  accentHover: '#E63946',        // 悬停红色

  // 文字色
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',

  // 边框色
  border: '#333333',

  // 渐变
  gradientDark: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
  gradientAccent: 'linear-gradient(135deg, #FF4757 0%, #E63946 100%)',    // 红色渐变
}

// ==================== 导出间距常量 ====================
export const LUZURIO_SPACING = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '64px',
  xxl: '96px',
  xxxl: '128px',
}

// ==================== 导出断点常量 ====================
export const LUZURIO_BREAKPOINTS = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
}

export default luzurioTheme
