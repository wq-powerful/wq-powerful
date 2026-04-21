import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Root error boundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900">
          <div className="max-w-sm text-center">
            <h1 className="text-xl font-semibold tracking-tight">页面加载失败</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              发生了未处理错误，请刷新页面后重试。
            </p>
            <button
              type="button"
              className="btn-primary mt-6"
              onClick={() => window.location.reload()}
            >
              重新加载
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
