import { Router } from 'express';
import * as pageDataController from '../controllers/pageData.controller';
const router = new Router();


router.route('/data/:pageName').post(pageDataController.getPageData);



export default router;