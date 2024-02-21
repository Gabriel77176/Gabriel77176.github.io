import pyautogui
import time

# Attendre 5 secondes avant de commencer
time.sleep(5)

# Boucle pour spammer la combinaison de touches Ctrl+N
while True:
    pyautogui.hotkey('ctrl', 'n')