from django.shortcuts import render, redirect

# Create your views here.

def post_list(request):
    return render(request, 'blog/post_list.html', {})


def test_form(request):

    if request.method == "POST":
    	print(request.method)
    	print('*'*40)
    	print (request.POST)
    	print('*'*40)
    else:
    	return redirect('/')
    from . import audio

