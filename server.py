import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 9055
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    os.chdir(DIRECTORY)
    try:
        # Use allow_reuse_address to avoid "Address already in use" errors during quick restarts
        socketserver.TCPServer.allow_reuse_address = True
        with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
            print(f"🏴‍☠️ BlackClaw Sandbox Server nahodený na porte {PORT}.")
            print(f"Servujem adresár: {DIRECTORY}")
            print("Pre ukončenie stlač Ctrl+C")
            httpd.serve_forever()
    except Exception as e:
        print(f"FAILED TO START SERVER: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print(f"\n--- {os.path.basename(__file__)} starting ---")
    print(f"Štartujem lokálny server na porte {PORT}...")
    
    # Simple check for index.html
    if os.path.exists(os.path.join(DIRECTORY, "index.html")):
        print(f"Index file found. Serving at http://localhost:{PORT}/")
    
    start_server()
