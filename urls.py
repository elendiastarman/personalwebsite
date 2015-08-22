from django.conf.urls import patterns, include, url

from starmanite import views

I = views.index

urlpatterns = patterns('',
    url(r'^$', views.home, name='home'),

    url(r'^products$', I, name='products'),
    url(r'^products/', include(patterns('',
        url(r'^programs$', I, name='programs'),
        url(r'^programs/', include(patterns('',
            url(r'^arbychess$', I, name='arbychess'),
            url(r'^lumiengame$', I, name='lumien-game'),
            url(r'^spinningtop$', I, name='spinningtop'),
        ))),
        url(r'^3dprinting$', I, name='3dprinting'),
        url(r'^3dprinting/', include(patterns('',
            url(r'^geometric$', I, name='geometric'),
        ))),
        url(r'^commissions$', I, name='commissions'),
        url(r'^commissions/', include(patterns('',
            url(r'^trinkets$', I, name='trinkets'),
            url(r'^3dmodels$', I, name='3dmodels'),
        ))),
    ))),

    url(r'^writing$', I, name='writing'),
    url(r'^writing/', include(patterns('',
        url(r'^stories$', I, name='stories'),
        url(r'^stories/', include(patterns('',
            url(r'^lumienstory$', I, name='lumien-story'),
            url(r'^figments$', I, name='figments'),
        ))),
        url(r'^blog$', I, name='blog'),
        # url(r'^blog/', include(patterns('',
            # url(r'^theology$', I, name='theology'),
            # url(r'^thoughts$', I, name='thoughts'),
        #))),
        url(r'^academic$', I, name='academic'),
        url(r'^academic/', include(patterns('',
            url(r'^conceptweb$', I, name='conceptweb'),
        ))),
    ))),

    url(r'^portfolio$', I, name='portfolio'),
    url(r'^portfolio/', include(patterns('',
        url(r'^mathematics$', I, name='mathematics'),
        url(r'^mathematics/', include(patterns('',
            url(r'^recreational$', I, name='math-rec'),
            url(r'^classes$', I, name='math-classes'),
        ))),
        url(r'^programming$', I, name='programming'),
        url(r'^programming/', include(patterns('',
            url(r'^sigprogs$', I, name='sigprogs'),
            url(r'^background$', I, name='prog-background'),
        ))),
        url(r'^3dmodelling$', I, name='3dmodelling'),
        url(r'^3dmodelling/', include(patterns('',
            url(r'^blender$', I, name='blender'),
            url(r'^maya$', I, name='maya'),
        ))),
        url(r'^2dartwork$', I, name='2dartwork'),
        url(r'^2dartwork/', include(patterns('',
            url(r'^doodles$', I, name='doodles'),
            url(r'^sprites$', I, name='sprites'),
            url(r'^miscellaneous$', I, name='art-misc'),
        ))),
        url(r'^triumphs$', I, name='triumphs'),
        url(r'^triumphs/', include(patterns('',
            url(r'^creative$', I, name='creative'),
            url(r'^skill$', I, name='skill'),
        ))),
        url(r'^websites$', I, name='websites'),
        url(r'^websites/', include(patterns('',
            url(r'^starmaninnovations$', I, name='starmaninnovations'),
            url(r'^diningcommons$', I, name='diningcommons'),
        ))),
    ))),

    url(r'^information$', I, name='information'),
    url(r'^information/', include(patterns('',
        # url(r'^about$', I, name='about'),
        # url(r'^about/', include(patterns('',
            # url(r'^contact$', I, name='contact'),
            # url(r'^otherplaces$', I, name='otherplaces'),
        # ))),
		url(r'^contact$', I, name='contact'),
        url(r'^resume$', I, name='resume'),
        # url(r'^resume/', include(patterns('',
            # url(r'^current$', I, name='current'),
            # url(r'^education$', I, name='education'),
            # url(r'^jobs$', I, name='jobs'),
        # ))),
    ))),
)
