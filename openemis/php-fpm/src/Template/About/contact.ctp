<?php
$this->extend('OpenEmis./Layout/Panel');
$this->start('panelBody');
?>
<div class="wrapper panel panel-body">
	<!-- Contact Info -->
	<div class="about-wrapper">
		<div class="about-container">
			<div class="img-logo">
				<?= $this->Html->image('OS-Logo.png');?>
			</div>

			<div class="about-content">
				<p>The <a href="http://www.openemis.org" target="_blank">OpenEMIS</a> initiative aims to deploy a high-quality Education Management Information System (EMIS) designed to collect and report data on school, students, teachers and staff.</p>

				<div class="about-info">
					<i class="fa fa-envelope"></i>
					<span>
						<a href="http://www.openemis.org/contact" target="_blank">Contact OpenEMIS Support Team</a>
					</span>
				</div>

			</div>
		</div>
	</div>
</div>
<?php $this->end() ?>
