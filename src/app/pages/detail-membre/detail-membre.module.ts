import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMembrePageRoutingModule } from './detail-membre-routing.module';

import { DetailMembrePage } from './detail-membre.page';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {AntecedentsFamiliauxComponent} from '../../components/modals/antecedents-familiaux/antecedents-familiaux.component';
import {MaladiesComponent} from '../../components/modals/maladies/maladies.component';
import {HabitudesToxiquesComponent} from '../../components/modals/habitudes-toxiques/habitudes-toxiques.component';
import {MedecinsTraitantsComponent} from '../../components/modals/medecins-traitants/medecins-traitants.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ConsulationComponent} from '../../components/modals/consulation/consulation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AddConsulationComponent} from '../../components/modals/add-consulation/add-consulation.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMembrePageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatListModule
  ],

  declarations: [DetailMembrePage,AntecedentsFamiliauxComponent,ConsulationComponent,AddConsulationComponent,MaladiesComponent,HabitudesToxiquesComponent,MedecinsTraitantsComponent],
  entryComponents:[AntecedentsFamiliauxComponent,MaladiesComponent,HabitudesToxiquesComponent,AddConsulationComponent,MedecinsTraitantsComponent,ConsulationComponent]
})
export class DetailMembrePageModule {}
