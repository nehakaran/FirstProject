package sample;

import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.text.Text;
import javafx.scene.text.Font;
import javafx.collections.ObservableList;


public class Main extends Application {
    //creating a text object
    Text text = new Text();

    public void start(Stage primaryStage) throws Exception {
        //setting font of the text

        text.setFont(new Font(45));

        //setting the position of the text

        text.setX(150);
        text.setY(150);

        //setting the text to be added

        text.setText("Hello World !");

        //creating group object

        Group root = new Group();

        //adding scene to stage

        primaryStage.setScene(new Scene(root, 600, 300));

        //Retieving the observable list object

        ObservableList list = root.getChildren();

        //setting the text object tas a node object to the list

         list.add(text);

        //setting Title to stage

        primaryStage.setTitle("Message to World");
        primaryStage.show();
    }
    public static void main(String args[]) {

        launch(args);
    }
}
