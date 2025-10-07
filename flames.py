print("✨ Lets have some Fun ✨ \n     Play FLAMES 💕")

name1 = input("enter Your name ").lower().replace(" ","" )
cname = input("enter Your Crush💕 name ").lower().replace(" ","" )
name2 = cname

L1 = list(name1)
L2 = list(name2)

for char in name1:
    if char in L2:
        L1.remove(char)
        L2.remove(char)

count = len(L1) + len(L2)

flame = ['F', 'L', 'A', 'M', 'E', 'S']
    
while len(flame) > 1:
    cut = (count % len(flame)) - 1
        
    if cut >= 0:
        flame = flame[cut + 1:] + flame[:cut]
    else:
        flame.pop(-1)


relation ={
    'F': 'Friendship',
    'L': 'Love',
    'A': 'Affection',
    'M': 'Marriage',
    'E': 'Enemy',
    'S': 'Siblings'
}

print("The relation between You and your crush ",cname ," 🫣💕 is ", relation[flame[0]], "🫣" )