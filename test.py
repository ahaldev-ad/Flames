import tkinter as tk

# Create main window
window = tk.Tk()
window.title("Input & Output Example")
window.geometry("350x200")

# Function to process input and show output
def show_message():
    user_input = entry.get()        # Get input from entry box
    output_label.config(text=f"Hello, {user_input}!")  # Display output

# Label for instruction
tk.Label(window, text="Enter your name:", font=("Arial", 12)).pack(pady=10)

# Input box
entry = tk.Entry(window, font=("Arial", 12))
entry.pack(pady=5)

# Button to trigger function
tk.Button(window, text="Submit", command=show_message).pack(pady=10)

# Label to show output
output_label = tk.Label(window, text="", font=("Arial", 12, "bold"))
output_label.pack(pady=10)

# Run the window
window.mainloop()

