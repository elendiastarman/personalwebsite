from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.core.urlresolvers import reverse
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

from django.template import Context, RequestContext

import datetime
from datetime import date, timedelta
today = datetime.date.today
from django.utils import timezone


# Create your views here.
def home(request, **kwargs):

	context = RequestContext(request)

	return render(request, 'starmanite/home.html', context_instance = context)

def index(request, **kwargs):

        context = RequestContext(request)

##        if 'path' in kwargs:
##                pathlist = kwargs['path'].rstrip('/').split('/')
##                context['pathlist'] = [
##                        (pathlist[k].capitalize(),
##                         '/'.join(pathlist[:k+1]),)
##                        for k in range(len(pathlist))
##                ]
##
        path2 = request.path.replace('/','_').lstrip('_')
        page_name = 'starmanite/%s.html' % path2

        return render(request, page_name, context_instance = context)

def custom_404(request):
    return render(request, 'starmanite/404.html', {}, status=404)
def custom_500(request):
    return render(request, 'starmanite/500.html', {}, status=500)
