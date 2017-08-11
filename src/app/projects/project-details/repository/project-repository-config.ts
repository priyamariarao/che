/*
 * Copyright (c) 2015-2017 Red Hat, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';

import {ProjectRepositoryController} from '../repository/project-repository.controller';
import {ProjectRepository} from '../repository/project-repository.directive';


export class ProjectRepositoryConfig {

  constructor(register) {
    register.controller('ProjectRepositoryController', ProjectRepositoryController);
    register.directive('projectRepository', ProjectRepository);

  }
}
