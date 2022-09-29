(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"borderSize":0,"definitions": [{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_676CC671_7E0D_EB9D_41D5_BEF7C66B014C","player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_98A09494_8E74_AF47_41D6_D829E4A4E811, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_98A09494_8E74_AF47_41D6_D829E4A4E811, 0)"}],"class":"PlayList","id":"playList_98A09494_8E74_AF47_41D6_D829E4A4E811"},{"borderSize":0,"right":"22.62%","contentOpaque":false,"borderRadius":0,"propagateClick":false,"gap":10,"scrollBarMargin":2,"class":"Container","width":"51.054%","children":["this.Button_6FD7F3DA_7E0A_688C_41CB_B125F92016EE","this.Button_6F682A68_7E0E_FB8B_41D9_93927628D74B","this.Button_6EEBF10C_7E0A_298B_41C9_31BDD03FF982","this.Button_6F083D80_7E0A_797B_4184_36320AD9C840"],"paddingTop":0,"paddingLeft":0,"id":"Container_6E99ED2F_7E0E_5985_41CF_96EEFEABF958","horizontalAlign":"center","paddingBottom":0,"data":{"name":"Container6377"},"backgroundOpacity":0,"paddingRight":0,"bottom":"0.83%","layout":"horizontal","scrollBarVisible":"rollOver","toolTipHorizontalAlign":"center","height":"6.633%","verticalAlign":"bottom","overflow":"hidden","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"scrollBarWidth":10,"shadow":false,"scrollBarOpacity":0.5},{"borderSize":0,"data":{"name":"Button1170"},"borderRadius":0,"propagateClick":false,"width":40,"class":"IconButton","cursor":"hand","paddingTop":0,"paddingLeft":0,"id":"IconButton_6A0E488F_7E1E_3885_41DA_66C01FDDC85A","horizontalAlign":"center","paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"top":"15.42%","transparencyActive":true,"height":40,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_6A0E488F_7E1E_3885_41DA_66C01FDDC85A_pressed.png","mode":"toggle","minHeight":0,"minWidth":0,"shadow":false,"iconURL":"skin/IconButton_6A0E488F_7E1E_3885_41DA_66C01FDDC85A.png","right":"0.96%"},{"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_693D5113_7FFA_299D_41AC_FBDD69ED8131"],"id":"panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63","label":trans('panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63.label'),"frames":[{"thumbnailUrl":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_0/{face}/0/{row}_{column}.jpg","colCount":24,"rowCount":4},{"width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","height":1024,"url":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_0/{face}/1/{row}_{column}.jpg","colCount":12,"rowCount":2},{"width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512,"url":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_0/{face}/2/{row}_{column}.jpg","colCount":6,"rowCount":1},{"width":9216,"tags":"mobilevr","class":"TiledImageResourceLevel","height":1536,"url":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_0/{face}/vr/0.jpg","colCount":6,"rowCount":1},{"width":12288,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_0/{face}/vr2gen/0.jpg","colCount":6,"rowCount":1}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"LOJA PLANTA DOS P\u00c9S"},"hfovMax":120,"hfovMin":"150%"},{"rollOverBackgroundColorRatios":[0],"fontWeight":"normal","borderSize":0,"data":{"name":"Facebook"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":130,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_6FD7F3DA_7E0A_688C_41CB_B125F92016EE","fontFamily":"Franklin Gothic Medium Cond","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":40,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_6A6DB4E1_7E36_68BD_41CA_7CED32844D71.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":"16px","mode":"push","label":trans('Button_6FD7F3DA_7E0A_688C_41CB_B125F92016EE.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":15},{"data":{"label":"audio-planta-dos-pes-Final"},"loop":false,"audio":"this.audiores_683B2EE6_7FF6_5887_417C_7B602BF1D6FA","autoplay":true,"class":"MediaAudio","id":"audio_66D22FAB_7FF6_388D_41D9_025C59E1BC27"},{"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","id":"MainViewerVideoPlayer"},{"rollOverBackgroundColorRatios":[0],"fontWeight":"normal","borderSize":0,"data":{"name":"Instagram"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":130,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_6F682A68_7E0E_FB8B_41D9_93927628D74B","fontFamily":"Franklin Gothic Medium Cond","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":40,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_6AC3C79B_7E36_288D_41B1_A03B666514CC.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":"16px","mode":"push","label":trans('Button_6F682A68_7E0E_FB8B_41D9_93927628D74B.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":15},{"items":[{"camera":"this.panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_camera","media":"this.panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"video":"this.videores_666C7F80_7E0A_F97B_41D0_10DFEC2C1E07","loop":false,"height":480,"width":854,"class":"Video","thumbnailUrl":"media/video_676CC671_7E0D_EB9D_41D5_BEF7C66B014C_t.jpg","id":"video_676CC671_7E0D_EB9D_41D5_BEF7C66B014C","label":trans('video_676CC671_7E0D_EB9D_41D5_BEF7C66B014C.label'),"data":{"label":"Gol Neymar Sele\u00e7\u00e3o"},"scaleMode":"fit_inside"},{"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"borderSize":0,"right":0,"toolTipShadowColor":"#333138","subtitlesVerticalAlign":"bottom","propagateClick":false,"progressLeft":0,"subtitlesPaddingBottom":5,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","subtitlesPaddingRight":5,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"id":"MainViewer","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderSize":0,"playbackBarHeadHeight":15,"subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"toolTipFontStyle":"normal","progressBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","toolTipPaddingBottom":4,"surfaceReticleSelectionOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"vrPointerColor":"#FFFFFF","subtitlesTextDecoration":"none","firstTransitionDuration":0,"progressBarOpacity":1,"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"playbackBarBorderRadius":0,"toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"transitionDuration":500,"progressBottom":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowOpacity":0,"toolTipShadowSpread":0,"playbackBarHeadOpacity":1,"shadow":false,"translationTransitionDuration":1000,"subtitlesFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarOpacity":1,"toolTipFontWeight":"normal","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowBlurRadius":3,"borderRadius":0,"progressHeight":10,"playbackBarHeadBorderColor":"#000000","playbackBarProgressOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"subtitlesTop":0,"toolTipShadowHorizontalLength":0,"paddingTop":0,"paddingLeft":0,"surfaceReticleOpacity":0.6,"progressRight":0,"subtitlesShadow":false,"paddingBottom":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"progressOpacity":1,"progressBorderSize":0,"toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","paddingRight":0,"top":0,"playbackBarBorderSize":0,"playbackBarBottom":5,"bottom":0,"toolTipShadowOpacity":1,"subtitlesEnabled":true,"progressBarBorderColor":"#000000","subtitlesOpacity":1,"progressBarBorderRadius":0,"displayTooltipInSurfaceSelection":true,"toolTipBorderRadius":3,"toolTipShadowVerticalLength":0,"doubleClickAction":"toggle_fullscreen","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","progressBarBorderSize":0,"transitionMode":"blending","subtitlesGap":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipPaddingLeft":6,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","minHeight":50,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","left":0,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","progressBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","minWidth":100,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundOpacity":1,"progressBorderRadius":0,"subtitlesFontSize":"3vmin","toolTipOpacity":1},{"rollOverBackgroundColorRatios":[0],"fontWeight":"normal","borderSize":0,"data":{"name":"Localiza\u00e7\u00e3o"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":130,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_6F083D80_7E0A_797B_4184_36320AD9C840","fontFamily":"Franklin Gothic Medium Cond","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":40,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_6D7E13DB_7E0A_E88C_41BD_0E5239D04B48.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":"16px","mode":"push","label":trans('Button_6F083D80_7E0A_797B_4184_36320AD9C840.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":15},{"displayOriginPosition":{"yaw":162,"hfov":165,"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1},"class":"PanoramaCamera","automaticZoomSpeed":10,"idleSequence":"this.sequence_74E29750_7E0A_E99B_41D1_25A71DF9B92E","initialSequence":"this.sequence_74E29750_7E0A_E99B_41D1_25A71DF9B92E","initialPosition":{"yaw":162,"hfov":120,"pitch":-3.53,"class":"PanoramaCameraPosition"},"timeToIdle":5000,"displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":-3.53,"targetHfov":120}],"hoverFactor":0,"manualRotationSpeed":200,"manualZoomSpeed":0,"id":"panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63_camera"},{"rollOverBackgroundColorRatios":[0],"fontWeight":"normal","borderSize":0,"data":{"name":"Whatsapp"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":130,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_6EEBF10C_7E0A_298B_41C9_31BDD03FF982","fontFamily":"Franklin Gothic Medium Cond","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":40,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_6AD14ED2_7E35_D89F_41DE_2ED20EB7C18C.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":"16px","mode":"push","label":trans('Button_6EEBF10C_7E0A_298B_41C9_31BDD03FF982.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":15},{"data":{"label":"Informa\u00e7\u00e3o Brasil"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"yaw":154.92,"class":"HotspotPanoramaOverlayImage","hfov":5.39,"vfov":4.47,"data":{"label":"Informa\u00e7\u00e3o Brasil"},"verticalAlign":"middle","image":"this.AnimatedImageResource_98A02475_8E74_AFC1_41B4_46A9FC7431D3","horizontalAlign":"center","pitch":-10.76,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_66F5D1AD_7FFA_2885_41A9_8A1549D3E111"],"id":"overlay_693D5113_7FFA_299D_41AC_FBDD69ED8131"},{"mp3Url":trans('audiores_683B2EE6_7FF6_5887_417C_7B602BF1D6FA.mp3Url'),"class":"AudioResource","id":"audiores_683B2EE6_7FF6_5887_417C_7B602BF1D6FA"},{"height":480,"width":854,"levels":["this.videolevel_9B4B91E5_8E74_A8C1_41C5_B6614CBCDE17"],"class":"VideoResource","id":"videores_666C7F80_7E0A_F97B_41D0_10DFEC2C1E07"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_74E29750_7E0A_E99B_41D1_25A71DF9B92E"},{"frameDuration":41,"frameCount":24,"levels":[{"height":636,"width":424,"url":"media/res_6719BB2C_7E1E_398B_41DC_F4CC8C27AE78_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","colCount":4,"rowCount":6,"id":"AnimatedImageResource_98A02475_8E74_AFC1_41B4_46A9FC7431D3"},{"click":"this.setMediaBehaviour(this.playList_98A09494_8E74_AF47_41D6_D829E4A4E811, 0, this.panorama_75A9F15F_7E0A_2985_41D3_601DBD09CB63, true); this.MainViewerVideoPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_66F5D1AD_7FFA_2885_41A9_8A1549D3E111"},{"width":854,"bitrate":921,"posterURL":trans('videolevel_9B4B91E5_8E74_A8C1_41C5_B6614CBCDE17.posterURL'),"url":trans('videolevel_9B4B91E5_8E74_A8C1_41C5_B6614CBCDE17.url'),"class":"VideoResourceLevel","height":480,"framerate":29.97,"type":"video/mp4","id":"videolevel_9B4B91E5_8E74_A8C1_41C5_B6614CBCDE17"}],"contentOpaque":false,"borderRadius":0,"propagateClick":false,"gap":10,"scrollBarMargin":2,"scrollBarColor":"#000000","class":"Player","width":"100%","paddingTop":0,"paddingLeft":0,"id":"rootPlayer","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"horizontalAlign":"left","paddingBottom":0,"vrPolyfillScale":0.75,"backgroundOpacity":1,"defaultVRPointer":"laser","paddingRight":0,"children":["this.MainViewer","this.Container_6E99ED2F_7E0E_5985_41CF_96EEFEABF958","this.IconButton_6A0E488F_7E1E_3885_41DA_66C01FDDC85A"],"toolTipHorizontalAlign":"center","layout":"absolute","scrollBarVisible":"rollOver","height":"100%","mediaActivationMode":"window","verticalAlign":"top","backgroundColor":["#FFFFFF"],"overflow":"hidden","mobileMipmappingEnabled":false,"desktopMipmappingEnabled":false,"buttonToggleMute":"this.IconButton_6A0E488F_7E1E_3885_41DA_66C01FDDC85A","scripts":{"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openLink":TDV.Tour.Script.openLink,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"shareSocial":TDV.Tour.Script.shareSocial,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"playAudioList":TDV.Tour.Script.playAudioList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initAnalytics":TDV.Tour.Script.initAnalytics,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneCamera":TDV.Tour.Script.cloneCamera,"mixObject":TDV.Tour.Script.mixObject,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPixels":TDV.Tour.Script.getPixels,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName},"minHeight":0,"minWidth":0,"downloadEnabled":true,"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","scrollBarWidth":10,"start":"this.playAudioList([this.audio_66D22FAB_7FF6_388D_41D9_025C59E1BC27], true); this.init()","shadow":false,"left":295.95,"data":{"defaultLocale":"pt","name":"Player903","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"scrollBarOpacity":0.5};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Thu Sep 29 2022