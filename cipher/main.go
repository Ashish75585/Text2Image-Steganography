package main

import "fmt"
import "encoding/base64"
import "syscall/js"

// func logic(method, messages, password string) string {
func logic(method, messages, password string) string {
	messages64 := []byte(messages)

	if method == "decript" {
		decoded, err := base64.StdEncoding.DecodeString(messages)
		if err != nil {
			fmt.Println("Decode error:", err)
			return "Dcode error"
		}
		messages64 = decoded
	}

	count := 0
	var encode []uint8
	for index := range messages64 {
		messageIndex := int(messages64[index])
		passwordIndex := int(password[count])

		if method == "encript" {
			encode = append(encode, uint8(messageIndex+passwordIndex))
		}
		if method == "decript" {
			encode = append(encode, uint8(messageIndex-passwordIndex))
		}

		count += 1
		if len(password) == count {
			count = 0
		}
	}

	if method == "encript" {
		return base64.StdEncoding.EncodeToString(encode)
	}
	if method == "decript" {
		return string(encode)
	}

	return "Error: Wrong method given."
}

func callLogic(this js.Value, inputs []js.Value) interface{} {
    return logic(inputs[0].String(), inputs[1].String(), inputs[2].String())
}

func main() {
    c := make(chan int)
    js.Global().Set("getLogic", js.FuncOf(callLogic))
    <-c
}
