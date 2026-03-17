package main

import (
	"fmt"
	"io"
	"net/http"
)

var chatApi = "https://joelsiervas.online/23025/lab4_web/"

func getMessages(w http.ResponseWriter, r *http.Request) {
	resp, _ := http.Get(chatApi + "/messages")

	io.Copy(w, resp.Body)
}

func postMessage(w http.ResponseWriter, r *http.Request) {
	resp, _ := http.Post(chatApi+"/messages", "application/json", r.Body)

	io.Copy(w, resp.Body)
}

func main() {
	http.Handle("GET /", http.FileServer(http.Dir("static")))
	http.HandleFunc("GET /api/messages", getMessages)
	http.HandleFunc("POST /api/messages", postMessage)

	fmt.Println("Server running on http://localhost:8000")
	http.ListenAndServe("0.0.0.0:8000", nil)
}
