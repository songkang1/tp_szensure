  <?php v_template_part(array("name" => "AdminHeader", "path" => "Admin/Public")); ?><?php v_template_part(array("name" => "AdminCrumb", "path" => "Admin/Public", "title" => "单页管理", "data" => array(array("name" => "Page", "path" => U("Admin/Page/index")), array("name" => $staticpage[0]['title'] == "" ? "添加新文章" : $staticpage[0]['title'], "path" => U("Admin/Page/edit/id/" . $staticpage[0]['id'] . ""))))); ?><!-- 实例化编辑器 --><script type="text/javascript">    var ue = UE.getEditor('body');</script><div id="dashboard">    <div class="tab-content">        <div class="tab-pane active" id="tab_1">            <div class="portlet box">                                    <!-- BEGIN FORM-->                    <form action="<?php echo U("Admin/Page/save"); ?>" method="post" class="horizontal-form">                        <h3 class="form-section">基本信息</h3>                        <input type='hidden' name='pageid' value='<?php echo $staticpage[0]['id'] ?>'>                        <div class="row-fluid">                            <div class="span6 ">                                <div class="control-group">                                    <label class="control-label" for="firstName">单页面标题</label>                                    <div class="controls">                                        <input type="text" id="title" name="title"  value='<?php echo $staticpage[0]['title'] ?>'  class="m-wrap span12" placeholder="Chee Kin">                                        <span class="help-block"></span>                                    </div>                                </div>                            </div>                        </div>                        <div class="row-fluid">                            <div class="span6 ">                                <div class="control-group">                                    <label class="control-label">唯一标识代码(请保证中英文状态下的唯一标识代码一致),说明:</label>                                    <label class="control-label"><small>关于我们:about;联系我们:contact;人才招聘:job;合作伙伴:partner；企业文化:wenhua；下载专区:download</small></label>                                   <div class="controls">                                        <input type="text" id="callcode" name="callcode"  value='<?php echo $staticpage[0]['callcode'] ?>'  class="m-wrap span12" placeholder="Chee Kin">                                        <span class="help-block"></span>                                    </div>                                </div>                            </div>                        </div>                        <div class="row-fluid">                            <div class="span6 ">                                <div class="control-group">                                    <label class="control-label" for="firstName">概要</label>                                    <div class="controls">                                        <textarea class="form-control span12" name="summary" id="summary" cols="30" rows="10"><?php echo $staticpage[0]['summary'] ?></textarea>                                        <span class="help-block"></span>                                    </div>                                </div>                            </div>                        </div>                        <!--/row-->                                <!--/row-->                        <div class="row-fluid">                            <div class="span11 ">                                <div class="control-group">                                    <label class="control-label" for="firstName">正文</label>                                    <div class="controls">                                        <script id="body" name="body" type="text/plain"><?php echo html_entity_decode($staticpage[0]["body"]) ?>                                        </script>                                        <span class="help-block"></span>                                    </div>                                </div>                            </div>                        </div>                        <!--/row-->                          <div class="form-actions">                            <button type="submit" class="btn blue"><i class="icon-ok"></i> Save</button>                            <button type="button" class="btn">Cancel</button>                        </div>                    </form>                    <!-- END FORM-->              </div>        </div>    </div></div><input type="hidden" id='nav-current-index' value='5|0'> <?php v_template_part(array("name" => "AdminFooter", "path" => "Admin/Public")); ?>