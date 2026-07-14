import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Surfaces the real cause in the browser console instead of a silent blank screen
    console.error("Portfolio crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-void text-ink px-6">
          <div className="max-w-md text-center font-mono">
            <p className="text-coral text-sm mb-3">$ status: crashed</p>
            <h1 className="font-display text-2xl font-semibold mb-3">
              Something broke on this page.
            </h1>
            <p className="text-muted text-sm mb-4">
              {this.state.error?.message || "Unknown error"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-sm px-4 py-2 border border-mint text-mint rounded hover:bg-mint hover:text-void transition-colors"
            >
              reload_page()
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
