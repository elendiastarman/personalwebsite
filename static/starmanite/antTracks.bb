Graphics 800, 600
SeedRnd(MilliSecs())

gw = GraphicsWidth()
gh = GraphicsHeight()

startx = 10
starty = 5
endx = 20
endy = 15

Global scale = 25
Const limit = 10000
Global numsteps[limit]
Global weight = 1

Type point
	Field x, y
	Field id
	Field edges.point[4]
	Field edgeVals#[4]
	Field special$
	Field visited
End Type

Type ant
	Field steps
	Field points.point[1000000]
End Type

;

grid(scale)
DebugLog "Grided!"
For p.point = Each point
	If p\x = startx And p\y = starty
		p\special = "start"
		startp.point = p
	ElseIf p\x = endx And p\y = endy
		p\special = "end"
		endp.point = p
	EndIf
Next

a1.ant = createAnt(startp)
draw()

While Not KeyHit(1)

	iterate()

Wend
output()
End

;

Function createAnt.ant(p.point)

	a.ant = New ant
	a\steps = 1
	a\points[a\steps] = p
	DebugLog a\points[a\steps]\id
	Return a

End Function

Function draw()

	Color 255, 255, 255

	For p.point = Each point
	
		For i = 1 To 4
			If p\edges[i] <> Null
				p2.point = p\edges[i]
				
				x1 = p\x*scale
				y1 = p\y*scale
				x2 = p2\x*scale
				y2 = p2\y*scale
				
				Color 255, 255-5*(p\edgeVals[i]-1), 255-5*(p\edgeVals[i]-1)
				
				;Line x1,y1, x2,y2
				Rect x1-1,y1+1, (x2-x1)+2,(y2-y1)+2
			EndIf
		Next
		
		x = p\x*scale
		y = p\y*scale
		;Stop
		
		Color 255, 255, 255
		If p\special = "start"
			Color 255, 0, 0
		ElseIf p\special = "end"
			Color 0, 0, 255
		EndIf
		
		Oval x-4, y-4, 9, 9, 1
		
	Next

End Function

Function grid(scale)

	Local pointIds.point[1000000]
	
	gw = GraphicsWidth()
	gh = GraphicsHeight()
	width = gw/scale
	height = gh/scale
	
	t = 0
	
	For py = 1 To height-1
		For px = 1 To width-1
			
			p.point = New point
			p\x = px
			p\y = py
			
			t = t + 1
			p\id = t
			
			pointIds[t] = p
			
			If px > 1			p\edgeVals[2] = 1 ;west
			If px < width-1		p\edgeVals[4] = 1 ;east
			If py > 1			p\edgeVals[1] = 1 ;north
			If py < height-1	p\edgeVals[3] = 1 ;south
		Next
	Next
	
	For p.point = Each point
		For i = 1 To 4
		
			If p\edgeVals[i] > 0
				k = p\id + Cos(90*i) + -((width-1)*Sin(90*i))
				p\edges[i] = pointIds[k]
			EndIf
		
		Next
	Next
	
End Function

Function iterate()

	;DebugLog "ding"

	For a.ant = Each ant
		
		For i = 1 To 4
			sum# = sum + a\points[a\steps]\edgeVals[i]
		Next
		
		r# = Rnd(0,sum)
		;DebugLog r
		
		For k = 1 To 4
			j# = a\points[a\steps]\edgeVals[k]
			;DebugLog j
			
			If r <= j
				Exit
			Else
				r = r - j
			EndIf
			
		Next
		;DebugLog k
		
		If k < 5
			a\steps = a\steps + 1
			a\points[a\steps] = a\points[a\steps-1]\edges[k]
			;DebugLog a\steps
		EndIf
		
		If a\points[a\steps]\special = "end"
			backtrack(a)
		EndIf
		
	Next

End Function

Function backtrack(a.ant)

	;DebugLog "backtracking!"
;	DebugLog numsteps[0]
;	DebugLog limit
	
	numsteps[0] = numsteps[0]+1
	numsteps[ numsteps[0] ] = a\steps
	If numsteps[0] = limit	output(): End
	If numsteps[0] Mod 100 = 0		DebugLog numsteps[0]

	While a\points[a\steps]\special <> "start"
		p1.point = a\points[a\steps]
		p2.point = a\points[a\steps-1]
		
		If p1\visited <> 1 Or p2\visited <> 1
			p1\visited = 1
			p2\visited = 1
			
			For i = 1 To 4
				If p1\edges[i] = p2
				
					add# = 1./a\steps
					
					p1\edgeVals[i] = p1\edgeVals[i] + add
					If i = 1	j = 3;: DebugLog "north"
					If i = 2	j = 4;: DebugLog "west"
					If i = 3	j = 1;: DebugLog "south"
					If i = 4	j = 2;: DebugLog "east"
					p2\edgeVals[j] = p2\edgeVals[j] + add
				EndIf
			Next
			
			Color 0, 255, 0
			Oval p1\x*scale-4, p1\y*scale-4, 9, 9, 1
			;Delay 10
			
			If KeyHit(1) output(): End
		EndIf
		
		a\steps = a\steps-1
	Wend
	
	a\steps = 1
	For p.point = Each point
		p\visited = 0
	Next
	
	WaitKey
	Delay 100
	
	draw()

End Function

Function output()

	s$ = ""
	For i = 1 To numsteps[0]
		s = s + numsteps[i]
		s = s + " "
	Next

	file = WriteFile("antSteps_"+weight+".txt")
	WriteLine(file,s)
	CloseFile(file)

End Function