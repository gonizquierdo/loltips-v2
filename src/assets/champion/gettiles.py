import os

with open('../champion_tiles.txt', 'w') as f:
	for file in os.listdir():
		f.write('"{}": "require(\'../assets/champion/{}\')",\n'.format(file.split('.png')[0], file))
	f.close()
	