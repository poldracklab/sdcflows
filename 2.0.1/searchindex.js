Search.setIndex({docnames:["api","api/sdcflows.fieldmaps","api/sdcflows.interfaces","api/sdcflows.interfaces.brainmask","api/sdcflows.interfaces.bspline","api/sdcflows.interfaces.epi","api/sdcflows.interfaces.fmap","api/sdcflows.interfaces.reportlets","api/sdcflows.interfaces.utils","api/sdcflows.utils","api/sdcflows.utils.bimap","api/sdcflows.utils.epimanip","api/sdcflows.utils.misc","api/sdcflows.utils.phasemanip","api/sdcflows.utils.tools","api/sdcflows.utils.wrangler","api/sdcflows.viz","api/sdcflows.viz.utils","api/sdcflows.workflows","api/sdcflows.workflows.ancillary","api/sdcflows.workflows.apply","api/sdcflows.workflows.apply.correction","api/sdcflows.workflows.apply.registration","api/sdcflows.workflows.base","api/sdcflows.workflows.fit","api/sdcflows.workflows.fit.fieldmap","api/sdcflows.workflows.fit.pepolar","api/sdcflows.workflows.fit.syn","api/sdcflows.workflows.outputs","changes","index","installation","links"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/sdcflows.fieldmaps.rst","api/sdcflows.interfaces.rst","api/sdcflows.interfaces.brainmask.rst","api/sdcflows.interfaces.bspline.rst","api/sdcflows.interfaces.epi.rst","api/sdcflows.interfaces.fmap.rst","api/sdcflows.interfaces.reportlets.rst","api/sdcflows.interfaces.utils.rst","api/sdcflows.utils.rst","api/sdcflows.utils.bimap.rst","api/sdcflows.utils.epimanip.rst","api/sdcflows.utils.misc.rst","api/sdcflows.utils.phasemanip.rst","api/sdcflows.utils.tools.rst","api/sdcflows.utils.wrangler.rst","api/sdcflows.viz.rst","api/sdcflows.viz.utils.rst","api/sdcflows.workflows.rst","api/sdcflows.workflows.ancillary.rst","api/sdcflows.workflows.apply.rst","api/sdcflows.workflows.apply.correction.rst","api/sdcflows.workflows.apply.registration.rst","api/sdcflows.workflows.base.rst","api/sdcflows.workflows.fit.rst","api/sdcflows.workflows.fit.fieldmap.rst","api/sdcflows.workflows.fit.pepolar.rst","api/sdcflows.workflows.fit.syn.rst","api/sdcflows.workflows.outputs.rst","changes.rst","index.rst","installation.rst","links.rst"],objects:{"sdcflows.fieldmaps":{EstimatorType:[1,1,1,""],FieldmapEstimation:[1,1,1,""],FieldmapFile:[1,1,1,""],MetadataError:[1,4,1,""],clear_registry:[1,5,1,""],get_identifier:[1,5,1,""]},"sdcflows.fieldmaps.EstimatorType":{ANAT:[1,2,1,""],MAPPED:[1,2,1,""],PEPOLAR:[1,2,1,""],PHASEDIFF:[1,2,1,""],UNKNOWN:[1,2,1,""]},"sdcflows.fieldmaps.FieldmapEstimation":{bids_id:[1,2,1,""],get_workflow:[1,3,1,""],method:[1,2,1,""],paths:[1,3,1,""],sources:[1,2,1,""]},"sdcflows.fieldmaps.FieldmapFile":{bids_root:[1,2,1,""],check_path:[1,3,1,""],entities:[1,2,1,""],find_meta:[1,2,1,""],metadata:[1,2,1,""],path:[1,2,1,""],suffix:[1,2,1,""]},"sdcflows.interfaces":{brainmask:[3,0,0,"-"],bspline:[4,0,0,"-"],epi:[5,0,0,"-"],fmap:[6,0,0,"-"],reportlets:[7,0,0,"-"],utils:[8,0,0,"-"]},"sdcflows.interfaces.brainmask":{BinaryDilation:[3,1,1,""],BrainExtraction:[3,1,1,""],Union:[3,1,1,""]},"sdcflows.interfaces.bspline":{BSplineApprox:[4,1,1,""],Coefficients2Warp:[4,1,1,""],TOPUPCoeffReorient:[4,1,1,""],TransformCoefficients:[4,1,1,""],bspline_grid:[4,5,1,""],bspline_weights:[4,5,1,""],grid_bspline_weights:[4,5,1,""]},"sdcflows.interfaces.epi":{GetReadoutTime:[5,1,1,""]},"sdcflows.interfaces.fmap":{CheckB0Units:[6,1,1,""],PhaseMap2rads:[6,1,1,""],Phasediff2Fieldmap:[6,1,1,""],SubtractPhases:[6,1,1,""]},"sdcflows.interfaces.reportlets":{FieldmapReportlet:[7,1,1,""]},"sdcflows.interfaces.utils":{ConvertWarp:[8,1,1,""],DenoiseImage:[8,1,1,""],Deoblique:[8,1,1,""],Flatten:[8,1,1,""],IntensityClip:[8,1,1,""],Reoblique:[8,1,1,""]},"sdcflows.utils":{bimap:[10,0,0,"-"],epimanip:[11,0,0,"-"],misc:[12,0,0,"-"],phasemanip:[13,0,0,"-"],tools:[14,0,0,"-"],wrangler:[15,0,0,"-"]},"sdcflows.utils.bimap":{EstimatorRegistry:[10,1,1,""],bidict:[10,1,1,""]},"sdcflows.utils.bimap.EstimatorRegistry":{get_key:[10,3,1,""],sources:[10,3,1,""]},"sdcflows.utils.bimap.bidict":{add:[10,3,1,""],clear:[10,3,1,""]},"sdcflows.utils.epimanip":{epi_mask:[11,5,1,""],get_trt:[11,5,1,""]},"sdcflows.utils.misc":{front:[12,5,1,""],get_free_mem:[12,5,1,""],last:[12,5,1,""]},"sdcflows.utils.phasemanip":{au2rads:[13,5,1,""],delta_te:[13,5,1,""],phdiff2fmap:[13,5,1,""],subtract_phases:[13,5,1,""]},"sdcflows.utils.tools":{brain_masker:[14,5,1,""]},"sdcflows.utils.wrangler":{find_estimators:[15,5,1,""]},"sdcflows.viz":{utils:[17,0,0,"-"]},"sdcflows.viz.utils":{coolwarm_transparent:[17,5,1,""],plot_registration:[17,5,1,""]},"sdcflows.workflows":{ancillary:[19,0,0,"-"],apply:[20,0,0,"-"],base:[23,0,0,"-"],fit:[24,0,0,"-"],outputs:[28,0,0,"-"]},"sdcflows.workflows.ancillary":{init_brainextraction_wf:[19,5,1,""]},"sdcflows.workflows.apply":{correction:[21,0,0,"-"],registration:[22,0,0,"-"]},"sdcflows.workflows.apply.correction":{init_unwarp_wf:[21,5,1,""]},"sdcflows.workflows.apply.registration":{init_coeff2epi_wf:[22,5,1,""]},"sdcflows.workflows.base":{init_fmap_preproc_wf:[23,5,1,""]},"sdcflows.workflows.fit":{fieldmap:[25,0,0,"-"],pepolar:[26,0,0,"-"],syn:[27,0,0,"-"]},"sdcflows.workflows.fit.fieldmap":{init_fmap_wf:[25,5,1,""],init_magnitude_wf:[25,5,1,""],init_phdiff_wf:[25,5,1,""]},"sdcflows.workflows.fit.pepolar":{init_3dQwarp_wf:[26,5,1,""],init_topup_wf:[26,5,1,""]},"sdcflows.workflows.fit.syn":{init_syn_preprocessing_wf:[27,5,1,""],init_syn_sdc_wf:[27,5,1,""]},"sdcflows.workflows.outputs":{DerivativesDataSink:[28,1,1,""],init_fmap_derivatives_wf:[28,5,1,""],init_fmap_reports_wf:[28,5,1,""]},"sdcflows.workflows.outputs.DerivativesDataSink":{out_path_base:[28,2,1,""]},sdcflows:{fieldmaps:[1,0,0,"-"],interfaces:[2,0,0,"-"],utils:[9,0,0,"-"],viz:[16,0,0,"-"],workflows:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:exception","5":"py:function"},terms:{"01_dir":1,"01_fieldmap":1,"01_phase2":1,"01_phasediff":1,"01_t1w":1,"0rc1":29,"2e6faa0":29,"2pi":29,"361cd67":29,"3dqwarp":[8,26,29],"3mm":27,"449c2c2":29,"717a69":29,"abstract":7,"boolean":[4,7,8,28],"break":29,"byte":[8,15],"case":[4,15,22],"class":[0,1,3,4,5,6,7,8,10,28],"default":[3,4,7,8,17,19,23,25,28,29],"enum":1,"final":[4,15,29,30],"float":[3,4,5,7,8,27],"function":[0,15,27,29,31],"import":[15,29,31],"int":[19,21,22,23,25,26,27],"mika\u00ebl":29,"new":[10,30],"return":[1,4,10,12,15,29],"true":[1,4,8,10,15,27,28],"universit\u00e4t":27,For:[4,11,15,25],NOT:29,Not:27,ONE:27,One:[27,28],TRs:8,The:[1,3,4,6,8,11,15,22,23,25,26,27,28,29,30,31],Then:11,These:[4,25,31],UMS:29,USE:29,Use:[11,14,29],Using:11,With:[11,29],__version__:31,_bold:15,_dwi:15,_fieldmap:25,_sbref:15,_t1w:15,_t2w:15,about:[11,29],abov:[25,31],absenc:27,absolut:11,acc:11,acceler:11,accept:29,access:30,accordingli:29,account:[11,27],accur:[26,27,29],accuraci:11,acquir:[27,30],acquisit:[11,15,25,30],across:[26,27],action:29,actual:[1,25],adapt:[4,29],add:[8,10,29],added:4,adding:29,addit:[8,31],address:29,adebimp:29,adopt:29,affect:29,affili:29,afni:[26,31],after:[3,4,8,15,19,21,25,29],afterward:29,air:25,algorithm:[25,29],align:[4,22,27,29],all:[1,4,10,15,29,31],allevi:4,allow:[11,29],allowed_ent:28,along:[4,11,21,25,29],alpha:7,alreadi:[10,25,29],also:[15,27,29],altern:11,alwai:4,amic:29,analysi:30,anat:[1,15],anat_mask:27,anat_nii:17,anat_ref:27,anatom:[15,22,25,27,28],ancillari:[0,18],ani:[5,6,8,27,28],annoi:29,anoth:[4,10],ant:[8,27,29,31],anterior:27,anyon:29,api:[29,30],appli:[0,15,18,26,27,29],applic:30,apply_mask:7,approach:[0,1,18,24,29],appropri:[21,29],approx:11,approxim:[4,27],april:30,arbitrari:13,arc:11,archiv:29,area:27,arg:[8,10],argument:[1,8],around:[11,17,29],arrai:4,art:30,artifact:[27,29],assess:11,associ:[1,4,25,27],assum:27,atla:[27,29],atlas_threshold:27,attempt:15,attribut:1,au2rad:13,august:30,auto:[17,29],auto_00000:[10,15],auto_00001:[10,15],auto_00002:[10,15],auto_00003:15,auto_00004:15,auto_00005:15,auto_00006:15,auto_00007:15,auto_00008:15,auto_00009:15,auto_00010:15,auto_00011:15,auto_00012:15,auto_00013:15,auto_00014:15,auto_00015:15,auto_bold_nss:27,autogener:29,autom:[1,25],automat:[10,15,27],avail:[1,5,11,15,31],averag:[25,27],avoid:29,axes:[4,29],axial:17,azeez:29,b0fieldidentifi:[1,23,28,29],b0fieldsourc:29,b_0:[4,11,15,25,27],back:[15,25,29],background:17,bad:29,ball:3,base:[0,1,3,4,5,6,7,8,10,18,25,26,27,28,30,31],base_directori:28,basic:[12,15],batteri:28,becaus:[4,11,15],been:[11,15,25,29],befor:29,being:30,believ:11,below:27,berlin:27,besid:25,best:4,bet:29,beta:4,better:[1,11,29],between:[4,25],beyond:4,bid:[1,6,11,13,15,25,26,28,29],bidict:10,bidirect:10,bids_fmap_id:28,bids_id:[1,15],bids_root:1,bidslayout:15,bimap:[0,9],binari:[3,8,25,31],binarydil:3,bioscienc:29,bit:11,blair:29,blocksiz:[4,29],bodi:4,bold:[15,27,29],boldref:29,bool:[1,15,21,22,23,25,26,27,28],both:[7,29],bound:8,boundari:4,brain:[3,4,7,11,19,22,25,27,28,29],brain_mask:14,brainextract:3,brainextraction_wf:19,brainmask:[0,2,19,27],bs_space:4,bspline:[0,2,29],bspline_dist:19,bspline_grid:4,bspline_weight:4,bsplineapprox:4,bug:29,bugfix:29,build:[1,27,28,29,31],built:15,cach:29,caclul:29,calcul:[4,5,6,11,13,19,21,25,27],call:[1,10,11,13],calul:25,can:[1,4,8,11,15,25,31],candid:15,cannot:10,capabl:8,cardin:[4,29],cdot:[4,11,25],center:[4,11,29],central:29,chang:29,channel:7,character:27,cheapli:29,check:[29,31],check_hdr:28,check_path:1,checkb0unit:6,choic:29,choke:29,christoph:29,cieslak:29,circl:29,circleci:29,citizen:29,clean:15,cleanup:29,clear:10,clear_registri:[1,15],clip:[8,19,25],close:4,cnr:29,code:[4,21,22,25,26,27,29],coeffici:[4,21,22,23,25,26,27,28,29],coefficients2warp:4,coerc:28,cognit:29,collect:[1,29],collis:29,color:17,combin:23,come:15,command:[8,31],commit:29,compact:4,compat:[8,29],complet:29,complic:[15,25],compon:25,comprehens:[15,29],compress:[17,28],comput:[4,8,27],conduc:29,config:29,configur:[22,26,27],confus:11,connect:29,consecut:25,consid:29,consist:[1,8],consol:11,consum:8,contain:[4,10,15,25,26,28],continu:25,contour:17,contrast:27,contributor:29,control:[4,22],control_zooms_mm:4,convers:[26,27],convert:[4,6,8,13,25,29],convertwarp:8,coolwarm:17,coolwarm_transpar:17,coordin:4,copi:8,copy_head:8,copyheaderinterfac:8,core:[3,4,5,6,8,25],coregistr:27,coron:17,correct:[0,4,8,18,20,25,27,29,30],corrected_mask:21,correctli:[15,29],correspond:[1,4,5,6,8,15,21,22,25,26,27,29,30],cost:27,coverag:29,cpu:[26,27,29],creat:[4,15,23,26,27],ctrl_nii:4,cubic:4,custom_ent:28,cut:17,cyceron:29,data:[1,3,4,8,11,14,15,27,28,29,30],data_dtyp:28,dataset:[8,15,21,22,25,26,28,29],datasink:28,datatyp:[8,28],deal:[5,6],debian:31,debug:[21,22,23,25,26,27],decemb:30,decim:4,dedupl:29,deep:29,defin:28,deform:27,del:10,delta:25,delta_:[11,13,25],delta_t:13,demean:29,denoiseimag:8,deobliqu:8,depart:29,depend:[23,29,30],deploi:[29,31],deploy:29,dept:29,deriv:[15,23,25,27,28,29,30],derivativesdatasink:[28,29],describ:[8,25,27,29],descript:[29,31],design:[4,30],detach:29,detail:25,detect:27,develop:[27,29,30],diagon:4,dict:[10,13,25,26,27,28],dictionari:[5,6,8,10,21,26,27,28],differ:[0,1,6,11,13,15,18,24,29,30],diffus:27,dilat:3,dimens:[4,8],dimension:[8,25],direct:[0,4,11,18,24,26,27],directli:[4,25],directori:[23,28],disabl:1,disappear:11,discuss:11,dismiss:4,dismiss_ent:28,displac:[4,8,21,25,27],displai:30,distanc:[19,29],distort:[21,22,25,27,29,30],distortedref:29,distribut:4,div_id:17,dmriprep:29,doc:29,docker:29,dockerfil:31,docstr:29,document:[11,29],doe:11,doi:[25,27],done:[11,25,29],dot:29,dotsb:25,downstream:29,drift:25,drop:29,ds000054:15,ds000206:15,ds001600:15,ds001771:15,dsa:15,dsa_dir:1,dseg:29,dtype:[8,28],dwi:[15,29],dynam:29,e0152472:27,each:[4,26],earli:11,easili:[4,30],echo:[11,25,30],echospac:11,echotim:[1,25],echotime1:[13,25],echotime2:[1,13,25],echotimediffer:13,ees:11,effect:[4,11,29],effectiveechospac:11,effigi:29,either:25,elaps:25,element:[3,12,26,27],elsewher:25,embed:4,emploi:8,empti:[1,10,15],enabl:[1,4,23,29],encod:[4,25,26,27],enforc:29,engin:11,enh:29,enough:11,ensur:[6,25],enthusiast:27,entiti:[1,28,29],environ:[8,31],epi:[0,2,3,4,8,11,14,15,19,21,22,25,26,27,29,30],epi_mask:[11,27],epi_ref:27,epifactor:11,epimanip:[0,9],eqref:[4,11,25],equival:[11,25],error:[1,4,11,29],especi:27,esteban:29,estim:[0,1,8,10,15,18,19,22,23,24,26,27,28,29,30],estimate_bright:17,estimatorregistri:10,estimatortyp:[1,15],etc:[11,29],evalu:[4,25,27,29],everi:25,exampl:[1,10,12,13,15],except:[1,15],exclud:27,exclus:8,execut:[8,15,27],exercis:29,exist:[3,4,5,6,7,8,28],expect:[8,27],experiment:27,extens:29,extent:4,extern:30,extra:28,extract:[1,3,8,19,28,29],extrapol:[4,29],eye:29,fact:25,factor:[4,8,11,25],fake:15,fall:4,fals:[1,4,7,8,15,17,21,22,23,25,26,27,28],fast:[4,21,22,25,26,27,29],fat:11,featur:29,februari:30,fed:26,feedback:27,few:15,field:[1,4,8,11,15,21,22,23,25,26,27,28,29],fieldcoeff:[4,29],fieldmap:[0,4,5,6,7,10,13,15,18,19,21,22,23,24,26,28,29,30],fieldmapestim:[1,10,15,23,29],fieldmapfil:[1,29],fieldmapreportlet:[7,29],file1:10,file2:10,file3:10,file4:10,file5:10,file:[1,3,4,5,6,7,8,15,19,22,26,27,28,29,31],filenam:[1,7,8,28],filepath:1,filter:[4,29],find:[11,15,25],find_estim:15,find_meta:1,fingerprint:4,first:[8,11,26,27,29],fit:[0,4,18,29],fix:[28,29],fixat:4,fixed_hdr:28,fixhead:8,fixup:29,flag:1,flake8:29,flatten:[8,10],fledg:4,flexibil:29,flexibl:29,flirt:29,float32:8,flow:29,fmap2field_wf:22,fmap:[0,1,2,22,23,25,26,27],fmap_coeff:[21,22,23,25,26,27,28],fmap_derivatives_wf:28,fmap_mask:[22,25,26,28],fmap_preproc_wf:23,fmap_ref:[4,22,23,25,26,27,28],fmap_reports_wf:28,fmap_typ:28,fmap_wf:25,fmapid:29,fmapless:15,fmri:25,fmriprep:[15,29],fninf:27,follow:[4,11,29,31],forc:[8,15],force_fmapless:15,foreground:17,fork:29,form:[4,8],former:15,formul:11,forward:29,found:[11,15,27,29,31],fov:29,frac:[11,25],framework:29,franc:29,free:12,freesurf:31,freie:27,frequenc:11,from:[1,4,5,8,11,12,13,15,19,21,25,27,28,29,31],from_fil:[3,4,5,6,8],front:[12,27,29],fsl:[4,11,25,26,29,31],full:[4,17],fulli:4,further:[11,25],gamma:[11,25],gaussian:8,gener:[4,7,10,23,25,29],geometr:27,get:[10,11],get_data:29,get_fdata:29,get_free_mem:12,get_identifi:1,get_kei:10,get_trt:11,get_workflow:1,getreadouttim:5,git:29,github:29,given:[1,4,6,13,15,19,21,26,27,29],goncalv:29,gorgolewski:29,graph:[21,22,25,26,27],grappa:11,grayscal:[11,14],gre:[3,19,25],grid:4,grid_bspline_weight:4,guid:[11,25],guidelin:29,gyromagnet:[11,25],habitu:31,handl:[29,31],hard:29,harvard:29,has:[4,11,15,25,29],hashmap:10,have:[4,15,17,25,26,27,29],hcp101006:15,hcp:15,header:[4,8,28],hear:29,held:11,henc:4,here:[4,11,25],heurist:[15,29],higher:29,his:11,homogen:29,hospit:29,hotfix:29,housekeep:29,how:[11,15,31],huntenburg2014:27,huntenburg:27,hutton2002:25,hutton:25,idea:29,ident:29,identifi:[1,4,29],ieee:[4,27],imag:[4,5,8,11,14,15,19,21,22,25,27,29,30],imagingfrequ:11,img:[4,11],implement:[4,11,27,28,29],improv:29,in1:3,in2:3,in_:23,in_anat:27,in_coeff:4,in_data:[4,8,26],in_epi:[8,27],in_field:8,in_fil:[3,5,6,8,11,13,14,19,28],in_mask:[4,8],in_meta:[6,8,11,13,27],in_phas:[6,13],in_plumb:8,in_target:4,in_valu:13,includ:[27,29],inconsist:29,increas:29,index:[1,4],indic:[1,15],individu:[21,22,23,25,27],infer:[1,8],inform:[0,27,29],infrastructur:29,inhomogen:27,init_3dqwarp_wf:26,init_brainextraction_wf:19,init_coeff2epi_wf:22,init_fmap_derivatives_wf:28,init_fmap_preproc_wf:[23,29],init_fmap_reports_wf:28,init_fmap_wf:25,init_magnitude_wf:25,init_phdiff_wf:25,init_syn_preprocessing_wf:27,init_syn_sdc_wf:27,init_topup_wf:[26,29],init_unwarp_wf:21,initi:[1,15,29],inlin:29,inlist:12,input:[1,3,4,5,6,7,8,13,15,19,21,22,23,25,26,27,28,29,30],input_imag:8,insert:10,instal:30,instanc:[1,15,29],instead:29,int16:8,integ:[4,8,19,25],integr:29,intendedfor:[1,29],intens:[8,27],intensityclip:8,interfac:[1,28,29,30],intern:[26,27],interpol:[4,21,29],interpret:31,intramodalmerg:29,introduc:25,inu:29,invers:27,investig:15,isol:29,issu:29,item:[4,6,8,10,28],iter:4,itk:8,its:[21,25,28],januari:30,jenkinson2003:25,jenkinson:25,journal:27,json:[1,11],juli:30,just:[4,15,19,25],k_1:4,k_2:4,k_3:4,keep:29,kei:[5,6,8,10,28],kernel:[4,29],kevin:29,keyerror:10,keyword:1,knot:4,known:[4,11],krzysztof:29,kwarg:[1,7,10],label:[4,7,11,15,17,23,25,29],larg:[8,29],last:[1,10,11,12,13],lausann:29,layout:15,left:[11,28,29],legaci:[27,29],length:11,less:[0,15,18,24,26,29],lessen:8,let:25,level:29,leverag:29,lfloor:11,librari:30,licens:31,lifespan:29,lighten:4,like:27,likewis:15,limit:29,line:[8,31],link:[11,29],list:[1,4,6,8,10,12,15,23,25,26,27,28],listserv:11,liter:29,load:29,local:29,locat:[4,28],look:27,low:4,low_mem:4,lower:8,lr_epi:1,magazin:4,magnet:11,magneticfieldstrength:11,magnitud:[19,22,25,28,29],magnitude1:15,magnitude2:15,magnitude_wf:25,mai:[1,4,11,21,22,23,25,30],maint:29,mainten:29,major:29,make:[8,25,29,31],makefil:29,mandatori:[3,4,5,6,7,8,15,28],mani:[15,27],manifest:29,manipul:[11,13,29],manual:15,manuscript:29,map:[0,1,4,6,8,10,13,15,18,19,22,24,27,28,29,30],march:30,mark:4,markiewicz:29,marku:29,mask:[3,4,7,8,11,14,19,21,22,25,26,27,28,29],mask_anat:27,massag:[25,29],master:27,match:[1,4],mathbf:4,mathia:29,matrix:[4,11],matter:11,matthew:29,max_alpha:[7,17],max_tr:8,maximum:[7,21,22,23,25,29],mean:[4,15],measur:25,mechan:11,med:27,median:4,medicin:29,mem:4,mem_perc:4,memori:[12,29],merg:27,messag:29,meta:11,meta_dict:28,metadata:[1,5,6,8,11,13,15,21,25,26,27,28,29],metadataerror:1,method:[0,1,15,27],metric:27,mhz:11,middl:17,migrat:29,minim:[29,30],minimum:29,minor:29,misc:[0,9],miscelan:12,misconfigur:29,miss:15,mixin:[7,8],mni152nlin2009casym:29,mni:27,mnt:29,mode:[4,21,25,29],model:[8,27],modifi:[4,17],modul:[0,2,9,16,18,20,24,29,30],more:[4,15,25,27,28,29],morpholog:[11,14],mosaic:7,most:[1,10,11,13,27,29],move:[4,7,22,29],moving_label:7,mri:[25,27,30],mrm:25,multi:15,multipl:26,multiplex:29,must:[8,15,26,31],mutual:8,name:[1,7,11,15,19,21,22,23,25,26,27,28,29],nan:29,naveau:29,ndarrai:4,necessari:[11,15,25,29],need:[25,29],neighbor:25,neither:11,neurodock:31,neuroimag:[25,30,31],neuroinform:27,neurostar:11,newli:29,newpath:13,nibabel:4,niflow:29,nifti1imag:4,nifti:[4,15,28],nii:[1,11,25],nimg:25,niprep:[29,30],nipyp:[3,4,5,6,7,8,28,29,30,31],nipype1:29,niworkflow:[28,29],node:29,nois:[4,8,25],noise_imag:8,noise_model:8,nomin:29,nonbrain:19,none:[1,3,4,5,6,8,10,11,13,14,17,28],nonlinear:27,nonneg:8,nonstandard:11,nonsteadi:27,nonuniform:25,nonzero:25,normal:27,note:11,noth:1,novemb:30,now:[12,29],num_thread:8,number:[4,8,11,21,22,23,25,26,27],numpi:[4,28],obj:25,object:[1,3,4,5,6,7,8,15,28,29],obliqu:[4,8],obtain:[4,11,14,25],octob:30,odd:4,off:29,offer:30,offset:25,old:29,omp_nthread:[21,22,23,25,26,27],onc:11,one:[4,15,25,29],onli:[8,15],opaque_perc:17,open:30,openneuro:15,oper:[11,14],oppos:26,optim:[4,29],option:[3,4,5,6,7,8,11,19,23,26,27,28],orchestr:29,order:17,orient:[4,29],origin:[4,8,15,28],orthogon:26,oscar:29,oslo:29,other:[4,15,29,31],otherwis:12,our:[15,29],out:[4,28,29],out_:23,out_brain:19,out_coeff:4,out_data:8,out_epi:8,out_error:4,out_extrapol:4,out_field:[4,8],out_fil:[3,6,8,11,14,19,28],out_list:8,out_mask:[3,8,19],out_meta:[8,28],out_path_bas:28,out_probseg:[3,19],out_report:7,out_warp:[4,29],outlier:29,output:[0,3,4,5,6,7,8,18,19,21,22,23,25,26,27,29],output_dir:[23,28],output_imag:8,outputnod:29,outsid:[4,7],over:[4,11,29],overhaul:29,overlai:17,overlay_param:17,overload:28,overrid:29,overwrit:1,p_max:8,p_min:8,packag:[0,29,30,31],pad:14,pair:[10,15,25],parallel:[11,26,27],parallelreductionfactorinplan:11,paramet:[1,4,8,11,15,19,21,22,23,25,26,27,28,29],parekh:11,part:[25,30],particip:[15,23],particular:[10,25],patch:[4,29],path:[1,4,12,25,26,27,28,31],pathlik:[3,4,5,6,7,8,25,28],pdf:[21,22,25,26,27],pe_dir:4,pe_direct:5,pennsylvania:29,pepolar:[0,1,15,18,22,24,29],pepolar_estimate_wf:26,per:[11,25],percentil:8,perelman:29,perfect:4,perform:[1,4],phase1:[25,29],phase2:25,phase:[0,4,6,13,18,24,26,27,29],phase_diff:6,phasediff2fieldmap:6,phasediff:[1,15,25,29],phaseencodingdirect:[11,15],phasemanip:[0,9],phasemap2rad:6,phdiff2fmap:13,phdiff_wf:25,philip:11,physic:27,pick:[8,15],piec:29,piecewis:4,pin:29,pip:31,pipelin:29,pixel:[4,11],planar:30,plane:11,platform:30,pleas:[11,29],plo:27,plot:[17,29],plot_param:17,plot_registr:17,plumb:[4,8,29],png:[21,22,25,26,27],point:4,poldrack:29,pone:27,pop:12,popul:29,posit:8,possibl:[11,15],post:11,posterior:27,postprocess:29,potenti:[8,29],ppm:11,pravesh:11,pre:30,prefer:11,prelud:25,prepar:[25,27,29],preprocess:[11,23,25,27,28,29,30],prescrib:8,present:15,prevent:29,previou:29,print:31,probabilist:3,probabl:19,probe:12,problem:[4,11],procedur:27,process:[4,14,21,22,23,25,30],produc:25,product:[4,29],program:[8,29,30],project:4,promin:[27,29],propag:28,properti:10,propos:27,protocol:[27,29,30],proton:25,provid:[1,11,25,30],psi:4,psycholog:29,pull:29,purpos:[15,22,27],push:29,put:29,pybid:[15,29],pypi:31,python:[29,30,31],qualiti:22,quantit:25,quick:[11,14],quit:11,rad:[1,6,13,29],radian:[6,25],radiolog:29,radiu:3,rais:11,random:19,rang:[6,8,25,29],ratio:[11,25],reach:19,read:[1,13],readout:[4,5,11,21,25],readout_tim:5,reason:[4,29],receiv:[1,27],recent:[1,4,10,11,13,25],reconstruct:[11,25],refacor:29,refactor:29,refer:[4,7,15,19,21,22,23,25,26,27,28,29],reference_label:7,refresh:29,regard:11,regim:4,region:[25,27],registr:[0,7,18,20,27,29],registri:[1,15,29],regular:[4,27],rel:31,relat:29,releas:30,relev:29,reli:25,remov:[4,19,25,29],renam:[15,29],render:29,reobliqu:8,reorient:29,repeat:10,replac:[19,29],repo:29,report:[7,11,28,29],reportcapableinterfac:7,reportlet:[0,2,29],repres:[1,3,4,5,6,7,8,25,28],represent:29,reproduc:30,request:29,requir:[25,30,31],resampl:[8,22,27,29],research:27,resolv:4,resort:27,resource_monitor:[3,4,5,6,8],respect:4,restrict:27,result:[4,29],retain:4,retouch:29,reus:29,revers:[10,11],review:11,revis:[4,29],rfloor:11,rician:8,ridge_alpha:4,right:[11,12,28],rigid:4,ro_tim:4,robust:[29,30],rodent:29,roll:29,root:[1,4,29],rorden:11,ross:29,rotim:11,run:[8,21,22,25,27,29],russel:29,s_1:4,s_2:4,s_3:4,sagitt:17,same:[27,29],sampl:4,satterthwait:29,save:[8,23,28,29],save_nois:8,sbref:[15,29],scalar:8,scale:[17,21,25,29],scan:[11,30],scanner:25,scheme:[25,30],school:29,scm:29,sd_prior:27,sdc:[15,19,23,29],sdcflow:[0,31],search:1,second:[11,27],section:[4,25,26],see:[15,25,27,29],seem:11,segfault:4,segment:8,sei:[25,29],select:29,self:10,sens:11,separ:[19,25,29],septemb:30,sequenc:[0,18,24,27],seri:30,serv:28,session:[15,29],set:[4,11,15,21,27,28,29,31],setuptool:29,setuptools_scm:29,sever:29,shape:[4,29],shift:[11,25],should:[1,4,7,8,11,15,25,26,27,28],show:[7,29],shown:7,shrink:8,shrink_factor:8,sidecar:[1,11],siemens2rad:29,signal:4,simpl:29,simpleinterfac:[3,4,5,6,8],simplic:25,simplifi:15,simplist:29,singl:[8,15,23,29],sitek:29,size:[11,21],skim:29,skip:15,skull:[22,25,27],slice:25,sloppi:21,smart:19,smooth:[4,25],smriprep:29,sneve:29,soft:19,softwar:[29,31],some:[1,11,15,19,25,29,31],somewher:12,sort:[1,19,29],sourc:[1,3,4,5,6,7,8,10,11,12,13,14,15,17,19,21,22,23,25,26,27,28,30],source_fil:28,space:[4,11,21,22,27,28,29],spars:4,spatial:4,spatialimag:[4,29],special:[7,10],specif:[0,1,25,26,27,29],specifi:[8,27],speech:29,sphinx:29,spike:4,spinoza:11,spline:[4,19,21,25,26,27,29],stabil:29,stabl:29,standard:[11,29],stanford:29,start:29,state:[27,30],statement:11,std2anat_xfm:27,step:4,stop:29,store:[11,28],str:[1,8,15,19,21,22,23,25,26,27,28],strang:11,strategi:[1,4,23,29],strength:11,string:[3,4,5,6,7,8,28],strip:[22,25,27],strong:27,structur:[3,15],studholm:27,studholme2000:27,studi:27,sub:1,subject:[15,23],submit:29,submodul:[0,29,30],subordin:29,subpackag:[0,30],subsequ:25,subsequi:25,subtract:[25,29],subtract_phas:13,subtractphas:6,successfulli:15,suffer:25,suffic:15,suffici:29,suffix:1,suit:29,sum_:4,summar:11,support:[4,25,26,27],sure:31,surround:25,suscept:[27,30],svg:[7,21,22,25,26,27],svgutil:29,symmetr:27,syn:[0,8,18,24,29],syn_preprocessing_wf:27,syn_sdc_wf:27,system:31,t1w:[1,27],t1w_invers:27,t2w:27,t_mask:27,tabl:1,tag:[4,11,25,29],take:[25,26,27],taken:26,target:[4,21,22,25,28,29],target_mask:22,target_nii:4,target_ref:22,task:[26,27],techniqu:[0,18,24,27],technolog:29,templat:27,tensor:[4,29],tesla:25,test:[15,29],text:[11,13,25],thank:29,thei:29,theodor:29,theori:[0,18,24],therefor:[4,26],thereof:22,therfor:25,thesi:27,theta:25,theta_i:25,thi:[1,4,8,11,15,21,22,23,25,26,27,29,30],third:10,those:27,thourough:11,thread:[8,21,22,23,25],threshold:27,through:4,time:[4,5,8,11,21,25],timepoint:27,tissu:19,togeth:[27,29],tomatch:28,tool:[0,9,17,29,30,31],topup:[4,26,29],topupcoeffreori:4,total:[4,11,15],totalreadouttim:[1,11],traceback:[1,10,11,13],track:10,train:11,tran:27,transform:[4,27],transformcoeffici:4,transpar:[17,29],transparent_perc:17,travisci:29,treat:8,treiber2016:27,treiber:27,tri:[4,8],tupl:[1,4,8,12,25,27],two:[11,13,15,25,26,29],txt:10,type:[1,4,5,6,10,15,28],typeerror:10,typic:[4,27,30],typo:29,ubuntu:29,ucbn:29,uint8:8,uncompress:28,under:29,unhash:10,union:3,uniqu:[1,21,22,25],unit:[1,6,13,25,28,29],univers:29,unknown:1,unmodifi:28,unser1999:4,unser:4,untouch:12,unwarp:[21,25,26,27,29],unwarp_wf:21,unwrap:[25,29],updat:[4,29],upgrad:29,upper:8,usa:29,use:[8,15,21,22,23,25,29],used:[1,4,27,29,31],useful:11,user:[15,25,30],uses:[4,27],using:[4,15,25,27,29,31],util:[0,1,2,16,29,30],val:10,valid:[1,11,15,29],valu:[1,3,4,5,6,7,8,10,28],valueerror:[1,10,11,13],variabl:8,variat:[25,27],variou:[5,6],vein:29,veloc:25,vendor:11,verbos:8,veri:15,version:[8,15,29,31],via:25,view:[17,29],vision:29,visual:[7,17,29],viz:[0,30],volum:[27,29],voxel:[4,19,21,25,27],voyag:11,vsm:25,wai:29,walker:19,wang2017:27,wang:27,want:[1,25],warp:[8,27],water:11,waterfatshift:11,weight:[4,27],well:4,wfs:11,what:30,when:[1,4,15,25,29],whenev:29,where:[4,7,11,25,27],whether:[8,21,26,27,28],which:[1,4,5,6,8,11,23,25,26,28,29],why:4,wire:29,within:[4,11,25],without:[27,29],wonder:11,work:29,workdir:29,workflow:[0,1,15,29,30],wrangler:[0,9],wrap:[6,8,25],write:[28,29],write_coeff:[22,28],written:[28,31],wrong:11,your:31,zero:[4,7,15,29],zoom:[4,25]},titles:["Library API (application program interface)","sdcflows.fieldmaps module","sdcflows.interfaces package","sdcflows.interfaces.brainmask module","sdcflows.interfaces.bspline module","sdcflows.interfaces.epi module","sdcflows.interfaces.fmap module","sdcflows.interfaces.reportlets module","sdcflows.interfaces.utils module","sdcflows.utils package","sdcflows.utils.bimap module","sdcflows.utils.epimanip module","sdcflows.utils.misc module","sdcflows.utils.phasemanip module","sdcflows.utils.tools module","sdcflows.utils.wrangler module","sdcflows.viz package","sdcflows.viz.utils module","sdcflows.workflows package","sdcflows.workflows.ancillary module","sdcflows.workflows.apply package","sdcflows.workflows.apply.correction module","sdcflows.workflows.apply.registration module","sdcflows.workflows.base module","sdcflows.workflows.fit package","sdcflows.workflows.fit.fieldmap module","sdcflows.workflows.fit.pepolar module","sdcflows.workflows.fit.syn module","sdcflows.workflows.outputs module","What\u2019s new?","SDCFlows","Installation","&lt;no title&gt;"],titleterms:{"new":29,also:11,ancillari:19,api:0,appli:[20,21,22],applic:0,approach:27,april:29,august:29,author:29,base:[23,29],bimap:10,brainmask:3,bspline:4,content:30,correct:21,decemb:29,depend:31,differ:25,direct:25,epi:5,epimanip:11,estim:25,extern:31,februari:29,fieldmap:[1,25,27],fit:[24,25,26,27],fmap:6,instal:31,interfac:[0,2,3,4,5,6,7,8],januari:29,juli:29,less:27,librari:0,list:29,mai:29,map:25,march:29,misc:12,modul:[1,3,4,5,6,7,8,10,11,12,13,14,15,17,19,21,22,23,25,26,27,28],novemb:29,octob:29,output:28,packag:[2,9,16,18,20,24],paper:29,pepolar:26,phase:25,phasemanip:13,pre:29,program:0,registr:22,releas:29,reportlet:7,sdcflow:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],see:11,septemb:29,sequenc:25,seri:29,submodul:[2,9,16,18,20,24],subpackag:18,syn:27,techniqu:26,thank:11,theori:25,tool:14,util:[8,9,10,11,12,13,14,15,17],viz:[16,17],what:29,workflow:[18,19,20,21,22,23,24,25,26,27,28],wrangler:15}})