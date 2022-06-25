using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GatesTrigger : MonoBehaviour
{
    public GameObject leftDoor;
    public GameObject rightDoor;
    public GameObject flyingCube;

    void Start() { }

    void Update() { }

    void OnTriggerEnter(Collider col)
    {
        if (col.name == "player")
        {
            leftDoor.transform.position -= new Vector3(0.5f, 0, 0);
            rightDoor.transform.position += new Vector3(0.5f, 0, 0);
        }
    }
    void OnTriggerExit(Collider col)
    {
        if (col.name == "player")
        {
            leftDoor.transform.position += new Vector3(0.5f, 0, 0);
            rightDoor.transform.position -= new Vector3(0.5f, 0, 0);
        }
    }
    private void OnTriggerStay(Collider col)
    {
        if (col.tag == "Robot")
        {
            flyingCube.transform.Rotate(0, 10, 0);
            flyingCube.transform.RotateAround(col.transform.position, Vector3.up, 10);
        }
    }
}
